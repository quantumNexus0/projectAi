import React, { useState } from 'react';
import { X, FileText, ChevronDown, ChevronUp } from 'lucide-react';
import { UploadedFile } from '../types';
import { geminiModel } from '../lib/gemini';

interface FileUploadPreviewProps {
  file: UploadedFile | null;
  onRemove: () => void;
  onAnalysis?: (analysis: string) => void;
}

const FileUploadPreview: React.FC<FileUploadPreviewProps> = ({ file, onRemove, onAnalysis }) => {
  const [showFullContent, setShowFullContent] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeContent = async () => {
    if (!file) return;

    try {
      setIsAnalyzing(true);
      const prompt = `
        Please analyze this legal document and provide a detailed summary. 
        Focus on:
        1. Document type and purpose
        2. Key legal points and implications
        3. Any potential issues or areas of concern
        4. Recommendations for action

        Document content: ${file.content.substring(0, 5000)}
      `;

      const result = await geminiModel.generateContent(prompt);
      const analysis = await result.response.text();
      
      if (onAnalysis) {
        onAnalysis(analysis);
      }
    } catch (error) {
      console.error('Error analyzing document:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  if (!file) return null;

  const previewContent = showFullContent 
    ? file.content 
    : file.content.substring(0, 500) + (file.content.length > 500 ? '...' : '');

  return (
    <div className="bg-white rounded-lg shadow-sm border p-4 mb-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-blue-600" />
          <span className="font-medium text-gray-900">{file.name}</span>
        </div>
        <button 
          onClick={onRemove} 
          className="text-gray-500 hover:text-red-500 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600">File uploaded successfully</p>
          <button 
            onClick={analyzeContent}
            disabled={isAnalyzing}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              isAnalyzing 
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {isAnalyzing ? 'Analyzing...' : 'Analyze Document'}
          </button>
        </div>

        <div className="border rounded-lg">
          <div className="flex justify-between items-center p-3 bg-gray-50 border-b">
            <h3 className="text-sm font-medium text-gray-700">Content Preview</h3>
            <button
              onClick={() => setShowFullContent(!showFullContent)}
              className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800"
            >
              {showFullContent ? (
                <>
                  <ChevronUp className="h-4 w-4" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4" />
                  Show More
                </>
              )}
            </button>
          </div>
          <div className="p-3">
            <pre className="whitespace-pre-wrap text-sm font-mono text-gray-700 overflow-x-auto">
              {previewContent}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUploadPreview;
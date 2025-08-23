import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { Message, UploadedFile, LegalCase, LegalTemplate, Language, WebSearchResult } from '../types';
import { mockCaseLaws, mockLegalTemplates, mockBotResponses } from '../data/mockData';

// Google Search API configuration
const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const GOOGLE_SEARCH_ENGINE_ID = import.meta.env.VITE_GOOGLE_SEARCH_ENGINE_ID;
const GOOGLE_SEARCH_API_URL = 'https://www.googleapis.com/customsearch/v1';

// Create a new message
export const createMessage = (content: string, sender: 'user' | 'bot'): Message => {
  return {
    id: uuidv4(),
    content,
    sender,
    timestamp: new Date()
  };
};

// Process uploaded file
export const processUploadedFile = async (file: File): Promise<UploadedFile> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve({
        id: uuidv4(),
        name: file.name,
        content: reader.result as string,
        type: file.type
      });
    };
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsText(file);
  });
};

// Find relevant case laws
export const findRelevantCaseLaws = async (query: string): Promise<LegalCase[]> => {
  // In a real application, this would call an API to search a case law database
  return mockCaseLaws.filter(caselaw => 
    caselaw.title.toLowerCase().includes(query.toLowerCase()) ||
    caselaw.summary.toLowerCase().includes(query.toLowerCase())
  );
};

// Get legal templates
export const getLegalTemplates = async (): Promise<LegalTemplate[]> => {
  // In a real application, this would fetch templates from an API
  return mockLegalTemplates;
};

// Translate response to selected language
export const translateResponse = async (content: string, language: Language): Promise<string> => {
  // In a real application, this would use a translation API
  // For now, we'll return the original content
  return content;
};

// Search the web for legal information using Google Custom Search
export const searchWeb = async (query: string): Promise<WebSearchResult[]> => {
  try {
    if (!GOOGLE_API_KEY || !GOOGLE_SEARCH_ENGINE_ID) {
      console.error('Google Search API credentials not configured');
      return [];
    }

    const response = await axios.get(GOOGLE_SEARCH_API_URL, {
      params: {
        key: GOOGLE_API_KEY,
        cx: GOOGLE_SEARCH_ENGINE_ID,
        q: `legal ${query}`,
        num: 5
      }
    });

    if (!response.data.items) {
      return [];
    }

    return response.data.items.map((item: any, index: number) => ({
      id: String(index + 1),
      title: item.title || '',
      snippet: item.snippet || '',
      url: item.link || '',
      source: item.displayLink || ''
    }));
  } catch (error) {
    console.error('Error performing Google search:', error);
    return [];
  }
};

// Generate bot response using API
export const generateBotResponse = async (
  userMessage: string, 
  uploadedFile: UploadedFile | null,
  language: Language
): Promise<string> => {
  try {
    // First, search for relevant web results
    const webResults = await searchWeb(userMessage);
    let webResultsText = '';
    
    if (webResults.length > 0) {
      webResultsText = '\n\n### Relevant Web Results:\n' + webResults.slice(0, 2).map(result => (
        `- **${result.title}**\n  ${result.snippet}\n  [Read more](${result.url})`
      )).join('\n\n');
    }
    
    let response = '';
    
    if (userMessage.toLowerCase().includes('hello') || userMessage.toLowerCase().includes('hi')) {
      response = mockBotResponses.greeting;
    } 
    else if (userMessage.toLowerCase().includes('case') || userMessage.toLowerCase().includes('precedent')) {
      const caseInfo = mockCaseLaws[Math.floor(Math.random() * mockCaseLaws.length)];
      response = `${mockBotResponses.caseLaw}\n\n**${caseInfo.title}** - ${caseInfo.citation}\n\n${caseInfo.summary}\n\n### Legal Analysis\nThis case establishes important precedent regarding ${getRandomLegalTopic()}. The court's decision hinged on ${getRandomLegalPrinciple()}, which has implications for similar cases in the future.\n\n### Key Takeaways\n1. ${getRandomTakeaway()}\n2. ${getRandomTakeaway()}\n3. ${getRandomTakeaway()}`;
    }
    else if (userMessage.toLowerCase().includes('draft') || userMessage.toLowerCase().includes('template') || userMessage.toLowerCase().includes('document')) {
      const template = mockLegalTemplates[Math.floor(Math.random() * mockLegalTemplates.length)];
      response = `${mockBotResponses.documentDrafting}\n\n## ${template.title}\n\n${template.description}\n\nI can provide the full template if you'd like. This template is suitable for ${getRandomJurisdiction()} jurisdictions and covers essential legal protections including ${getRandomLegalProtection()} and ${getRandomLegalProtection()}.`;
    }
    else if (uploadedFile) {
      response = `${mockBotResponses.fileUpload}\n\n### Document Analysis\n\n1. **Document Type**: ${uploadedFile.type}\n2. **Document Name**: ${uploadedFile.name}\n3. **Content Classification**: Legal ${getRandomDocumentType()}\n\n### Key Findings\n\n1. This document appears to contain clauses related to ${getRandomLegalTopic()} and ${getRandomLegalTopic()}.\n2. The language suggests this was drafted under ${getRandomJurisdiction()} law.\n3. There are ${Math.floor(Math.random() * 5) + 2} sections that may require attention, particularly regarding ${getRandomLegalIssue()}.`;
    }
    else {
      response = generateDetailedLegalResponse(userMessage);
    }
    
    // Translate the response if needed
    const translatedResponse = await translateResponse(response, language);
    return translatedResponse + webResultsText;
    
  } catch (error) {
    console.error('Error generating response:', error);
    return 'I apologize, but I encountered an error processing your request. Please try again or rephrase your question.';
  }
};

// Generate a more detailed legal response
const generateDetailedLegalResponse = (query: string): string => {
  const legalTopics = [
    'contract law', 'property law', 'family law', 'criminal law', 
    'corporate law', 'intellectual property', 'employment law',
    'tax law', 'immigration law', 'environmental law'
  ];
  
  const relevantTopic = legalTopics.find(topic => 
    query.toLowerCase().includes(topic.toLowerCase())
  ) || legalTopics[Math.floor(Math.random() * legalTopics.length)];
  
  return `## Legal Analysis: ${capitalizeFirstLetter(relevantTopic)}\n\nBased on your query about "${query}", here's my legal assessment:\n\n### Legal Context\nYour question relates to ${relevantTopic}, which is governed by ${getRandomStatute()} in most jurisdictions. The legal principles that apply here include ${getRandomLegalPrinciple()} and ${getRandomLegalPrinciple()}.\n\n### Key Considerations\n1. **${getRandomLegalConsideration()}**: ${getRandomLegalExplanation()}\n2. **${getRandomLegalConsideration()}**: ${getRandomLegalExplanation()}\n3. **${getRandomLegalConsideration()}**: ${getRandomLegalExplanation()}\n\n### Potential Actions\n1. Consider ${getRandomLegalAction()}\n2. Review ${getRandomLegalDocument()}\n3. Consult with a ${relevantTopic} specialist regarding ${getRandomLegalIssue()}`;
};

// Helper functions for generating realistic-looking legal content
const getRandomLegalTopic = () => {
  const topics = [
    'contractual obligations', 'fiduciary duties', 'statutory interpretation',
    'regulatory compliance', 'due diligence requirements', 'liability limitations',
    'intellectual property rights', 'data privacy', 'consumer protection',
    'corporate governance', 'employment rights', 'property easements'
  ];
  return topics[Math.floor(Math.random() * topics.length)];
};

const getRandomLegalPrinciple = () => {
  const principles = [
    'the doctrine of estoppel', 'the reasonable person standard',
    'the four corners rule', 'stare decisis', 'the business judgment rule',
    'the doctrine of fair use', 'the rule against perpetuities',
    'the duty of care', 'the principle of good faith', 'respondeat superior'
  ];
  return principles[Math.floor(Math.random() * principles.length)];
};

const getRandomTakeaway = () => {
  const takeaways = [
    'Courts will generally enforce clear contractual terms between parties.',
    'Documentation and evidence preservation is critical to successful legal outcomes.',
    'Timing requirements in legal proceedings are strictly enforced.',
    'Disclosure obligations cannot be circumvented through technicalities.',
    'Precedent from higher courts binds lower courts in the same jurisdiction.',
    'Regulatory compliance should be proactively maintained and documented.',
    'Legal remedies may be limited by statutory caps in certain jurisdictions.',
    'Alternative dispute resolution can provide more efficient outcomes.',
    'Legal rights must typically be asserted in a timely manner to be preserved.',
    'The specific language used in legal documents significantly impacts interpretation.'
  ];
  return takeaways[Math.floor(Math.random() * takeaways.length)];
};

const getRandomJurisdiction = () => {
  const jurisdictions = [
    'U.S. federal', 'California', 'New York', 'Delaware', 'Texas',
    'UK', 'EU', 'Canadian', 'Australian', 'international'
  ];
  return jurisdictions[Math.floor(Math.random() * jurisdictions.length)];
};

const getRandomLegalProtection = () => {
  const protections = [
    'confidentiality provisions', 'indemnification clauses', 'limitation of liability',
    'intellectual property protection', 'non-compete provisions', 'dispute resolution mechanisms',
    'termination rights', 'force majeure clauses', 'warranty disclaimers', 'choice of law provisions'
  ];
  return protections[Math.floor(Math.random() * protections.length)];
};

const getRandomDocumentType = () => {
  const types = [
    'Contract', 'Agreement', 'Memorandum', 'Statute', 'Regulation',
    'Policy', 'Bylaw', 'Amendment', 'Declaration', 'Covenant'
  ];
  return types[Math.floor(Math.random() * types.length)];
};

const getRandomLegalIssue = () => {
  const issues = [
    'ambiguous terms', 'conflicting clauses', 'outdated references',
    'missing signatures', 'inadequate disclosures', 'jurisdictional issues',
    'enforceability concerns', 'regulatory compliance gaps', 'potential liability exposure',
    'insufficient protections'
  ];
  return issues[Math.floor(Math.random() * issues.length)];
};

const getRandomStatute = () => {
  const statutes = [
    'the Uniform Commercial Code', 'the Civil Rights Act', 'the Americans with Disabilities Act',
    'the Fair Labor Standards Act', 'the Digital Millennium Copyright Act',
    'the General Data Protection Regulation', 'the Foreign Corrupt Practices Act',
    'the Sarbanes-Oxley Act', 'common law principles', 'state statutory frameworks'
  ];
  return statutes[Math.floor(Math.random() * statutes.length)];
};

const getRandomLegalConsideration = () => {
  const considerations = [
    'Jurisdiction', 'Statute of Limitations', 'Burden of Proof',
    'Standing', 'Precedent', 'Regulatory Requirements',
    'Evidentiary Standards', 'Damages Calculation', 'Remedies Available',
    'Contractual Obligations', 'Fiduciary Duties', 'Legal Standing'
  ];
  return considerations[Math.floor(Math.random() * considerations.length)];
};

const getRandomLegalExplanation = () => {
  const explanations = [
    'This factor determines which laws apply to your situation and can significantly impact the outcome.',
    'There are strict time limits that must be observed to preserve your legal rights in this matter.',
    'The legal standard that must be met to establish the elements of your claim or defense.',
    'Recent court decisions have established new interpretations that may be relevant to your situation.',
    'Regulatory bodies have specific requirements that must be satisfied to maintain compliance.',
    'Documentation and evidence will be critical to establishing the necessary legal elements.',
    'The specific language used in relevant documents will be subject to careful interpretation by courts.',
    'There are multiple potential approaches, each with different risk and benefit profiles.',
    'The legal framework in this area continues to evolve with recent legislative changes.',
    'Industry standards and practices may influence how legal requirements are applied in your case.'
  ];
  return explanations[Math.floor(Math.random() * explanations.length)];
};

const getRandomLegalAction = () => {
  const actions = [
    'consulting with a specialized attorney',
    'reviewing and potentially amending relevant documents',
    'gathering additional evidence to support your position',
    'exploring settlement or alternative dispute resolution options',
    'conducting a compliance audit',
    'filing appropriate notices or registrations',
    'implementing preventative measures to mitigate future risk',
    'documenting all communications related to this matter',
    'researching applicable precedents in your jurisdiction',
    'establishing clear policies and procedures'
  ];
  return actions[Math.floor(Math.random() * actions.length)];
};

const getRandomLegalDocument = () => {
  const documents = [
    'existing contracts or agreements',
    'corporate bylaws or operating agreements',
    'employment policies and handbooks',
    'terms of service and privacy policies',
    'intellectual property registrations',
    'insurance policies and coverage details',
    'regulatory filings and correspondence',
    'board meeting minutes and resolutions',
    'property records and title documents',
    'prior legal opinions or memoranda'
  ];
  return documents[Math.floor(Math.random() * documents.length)];
};

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface UploadedFile {
  id: string;
  name: string;
  content: string;
  type: string;
}

export interface LegalCase {
  id: string;
  title: string;
  citation: string;
  summary: string;
  url: string;
}

export interface LegalTemplate {
  id: string;
  title: string;
  description: string;
  content: string;
  category?: string;
}

export interface WebSearchResult {
  id: string;
  title: string;
  snippet: string;
  url: string;
  source: string;
}

export type Language = 
  | 'English'
  | 'Hindi'
  | 'Spanish'
  | 'French'
  | 'German'
  | 'Chinese'
  | 'Arabic'
  | 'Russian'
  | 'Portuguese'
  | 'Japanese';
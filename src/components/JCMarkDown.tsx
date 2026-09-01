import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

// 1. Define the interface for your component props
interface JCMarkDownProps {
  filePath: string;
}

// 2. Apply the interface to the component parameters
function JCMarkDown({ filePath }: JCMarkDownProps) {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(filePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load markdown file: ${response.statusText}`);
        }
        return response.text();
      })
      .then((text) => {
        setContent(text);
        setLoading(false);
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        setLoading(false);
      });
  }, [filePath]);

  if (loading) return <div>Loading content...</div>;
  if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;

  return (
    <ReactMarkdown>{content}</ReactMarkdown>
  );
}

export default JCMarkDown;

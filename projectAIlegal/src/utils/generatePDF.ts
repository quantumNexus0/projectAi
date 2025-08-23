const generatePDF = async (templateId: string, bearerToken: string, data: any, templateName: string) => {
  const response = await fetch('https://us1.pdfgeneratorapi.com/api/v4/documents/generate', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${bearerToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      template: {
        id: templateId,
        data: data
      },
      format: 'pdf',
      output: 'url',
      name: templateName
    })
  });

  const result = await response.json();
  if (result.response && result.response.url) {
    window.open(result.response.url, "_blank");
  } else {
    console.error('Failed to generate PDF', result);
  }
};

export default generatePDF;

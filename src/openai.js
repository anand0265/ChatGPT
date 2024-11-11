


  const fetchOpenAIResponse = async () => {
    try {
      const res = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "text-davinci-003",
          prompt: message,
          temperature: 0.7,
          max_tokens: 256,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        }),
      });

      const data = await res.json();
      setResponse(data.choices[0].text);
    } catch (error) {
      console.error("Error fetching OpenAI API:", error);
    }
  };
export default fetchOpenAIResponse
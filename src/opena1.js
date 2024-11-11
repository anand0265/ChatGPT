
const {Configuration,OpenAIApi} = require("openai");
const configuration = new Configuration({apiKey:"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"});
const openai = new OpenAIApi(configuration);

export async function sendMsgToOpenAI(message) {
    const res=await openai.createCompletion({
        model: 'text-davinci-003',
        prompt:message,
        temperature:0.7,
        max_tokens:256,
        top_p:1,
        frequency_penality:0,
        presense_penalty:0

    });
    return res.data.choices[0].text;
}
    

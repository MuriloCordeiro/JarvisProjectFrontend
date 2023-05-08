import { useEffect, useState } from "react";
import { useSpeechSynthesis, useSpeechRecognition } from "react-speech-kit";

import { Button, Flex } from "@chakra-ui/react";
import { HandleGPT } from "../hooks/handleGPT";
export default function Homepage() {
  const [prompt, setPrompt] = useState("");
  const [promptResponse, setPromptResponse] = useState("");
  const { speak } = useSpeechSynthesis();

  const { listen, stop } = useSpeechRecognition({
    onResult: (result: any) => {
      setPrompt(result);
      console.log("result", result);
    },
  });
  console.log("stop", stop);

  async function executeGPT() {
    stop;
    const response = await HandleGPT(prompt);

    if (response !== undefined) {
      setPromptResponse(response);
    }
  }

  useEffect(() => {
    promptResponse !== ""
      ? speak({ lang: "pt-BR", text: promptResponse })
      : "Sem fala por aq";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [promptResponse]);

  useEffect(() => {
    prompt.includes("roberto") || prompt.includes("Roberto")
      ? executeGPT()
      : "";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prompt]);

  return (
    <Flex>
      {/* <Button
        onClick={() => {
          teste();
        }}
      ></Button> */}
      {/* <Button
        onClick={() => {
          executeGPT();
        }}
      >
        Iniciar bot
      </Button> */}
      <Button onClick={listen}>Gravar</Button>{" "}
      <textarea
        value={prompt}
        onChange={(event) => setPrompt(event.target.value)}
      />
      {/* <Button onClick={() => speak({ lang: "pt-BR", text: promptResponse })}>
        Ouvir
      </Button> */}
      <Button onClick={stop}>Parar</Button>
    </Flex>
  );
}

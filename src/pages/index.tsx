import { useEffect, useState } from "react";

import { useSpeechSynthesis, useSpeechRecognition } from "react-speech-kit";

import { Button, Flex, Input, Text, Textarea } from "@chakra-ui/react";
import { HandleGPT } from "../hooks/handleGPT";
import React from "react";
export default function Homepage() {
  const [prompt, setPrompt] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [promptResponse, setPromptResponse] = useState("");
  const { speak } = useSpeechSynthesis();

  const { listen, stop, listening } = useSpeechRecognition({
    onResult: (result: any) => {
      setPrompt(result);
      console.log("result", result);
    },
  });

  async function executeGPT() {
    stop();
    const response = await HandleGPT(prompt, apiKey);
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

  {
    console.log("api key", apiKey);
  }
  return (
    <Flex bgColor="#444654" w="100vw" h="100vh">
      <Flex align="center" justify="center" w="full" direction="column">
        <Text color="#D1D5DB" fontSize="24px" mb="2rem">
          Seja bem vindo ao Roberto, o Jarvis Brasileiro
        </Text>
        <Text color="#D1D5DB">
          Pressione o botão Gravar para começar e sempre encerre seu discurso
          com a palavra Roberto
        </Text>
        <Flex mt="1rem" direction="column">
          <Text color="#D1D5DB">Insira sua api key aqui</Text>
          <Input
            mb="1rem"
            color="#D1D5DB"
            w="full"
            value={apiKey}
            onChange={(event) => {
              setApiKey(event.target.value);
            }}
          />

          <Flex>
            {/* {listening && "ta ouvindo"} */}
            <Button
              onClick={listen}
              mr="1rem"
              colorScheme="green"
              isLoading={listening ? true : false}
            >
              Gravar
            </Button>
            <Button onClick={stop} colorScheme="red">
              Parar gravação
            </Button>
          </Flex>
          <Text color="#D1D5DB" mt="4rem">
            O que voce disser será exibido aqui:
          </Text>
          <Textarea
            color="#D1D5DB"
            value={prompt}
            onChange={(event: any) => setPrompt(event.target.value)}
          />
          {/* <Button onClick={() => speak({ lang: "pt-BR", text: promptResponse })}>
        Ouvir
      </Button> */}
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
        </Flex>
      </Flex>
    </Flex>
  );
}

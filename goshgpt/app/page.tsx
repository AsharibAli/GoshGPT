"use client";
import React from "react";
import Script from "next/script";

const GoshGPT = () => {
  return (
    <div className="m-0">
      <flowise-fullchatbot></flowise-fullchatbot>
      <Script
        src="https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"
        type="module"
        strategy="lazyOnload"
        onLoad={() => {
          if (window.Chatbot) {
            window.Chatbot.initFull({
              chatflowid: process.env.NEXT_PUBLIC_CHATFLOW_ID,
              apiHost: process.env.NEXT_PUBLIC_FLOWISE_API_HOST,
              theme: {
                button: {
                  backgroundColor: "#000000",
                  size: "medium",
                  iconColor: "white",
                },
                chatWindow: {
                  showTitle: true,
                  title:
                    "GoshGPT 🤖 - For Gosh Blockchain Community & Developers ✨",
                  welcomeMessage:
                    "Welcome to GoshGPT! I'm here to assist you with any programming questions or general inquiries about the Gosh Blockchain, and its ecosystem products.",
                  errorMessage:
                    "Unable to retrieve data from the server. Please try again later.",
                  backgroundColor: "#ffffff",
                  fontSize: 16,
                  botMessage: {
                    backgroundColor: "#f7f8ff",
                    textColor: "#000000",
                    showAvatar: true,
                    avatarSrc:
                      "https://raw.githubusercontent.com/AsharibAli/project-images/main/gosh-logo.webp",
                  },
                  userMessage: {
                    backgroundColor: "#000000",
                    textColor: "#ffffff",
                    showAvatar: true,
                    avatarSrc:
                      "https://raw.githubusercontent.com/AsharibAli/project-images/main/usericon.png",
                  },
                  textInput: {
                    placeholder: "Type your question here...",
                    backgroundColor: "#ffffff",
                    textColor: "#000000",
                    sendButtonColor: "#000000",
                    maxChars: 500,
                    maxCharsWarningMessage:
                      "You exceeded the characters limit. Please input less than 500 characters.",
                    autoFocus: true, // If not used, autofocus is disabled on mobile and enabled on desktop. true enables it on both, false disables it on both.
                    sendMessageSound: true,
                    // sendSoundLocation: "send_message.mp3", // If this is not used, the default sound effect will be played if sendSoundMessage is true.
                    receiveMessageSound: true,
                    // receiveSoundLocation: "receive_message.mp3", // If this is not used, the default sound effect will be played if receiveSoundMessage is true.
                  },
                  feedback: {
                    color: "#000000",
                  },
                  footer: {
                    textColor: "#000000",
                    text: "Build with ❤️ by",
                    company: "Asharib Ali",
                    companyLink: "https://github.com/AsharibAli/",
                  },
                },
              },
            });
          }
        }}
      />
    </div>
  );
};

export default GoshGPT;

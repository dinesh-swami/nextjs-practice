import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <Image src={"/jwt.png"} alt="jarvis" width={200} height={200} />
      <h1>Welcome To jarvis Your personal ai assistant</h1>
      <p>
        Welcome to Jarvis, your personal AI assistant. Jarvis is designed to
        help you with your daily tasks and make your work easier. It can answer
        questions, provide information, and assist with problem-solving. Whether
        you need help with learning, coding, writing, or planning, Jarvis is
        always ready to support you. It works quickly and efficiently to save
        your time. Jarvis can help improve your productivity and simplify
        complex tasks. You can interact with it naturally through conversation.
        It is available whenever you need assistance. Jarvis aims to be your
        reliable digital companion. Start exploring and experience the power of
        AI with Jarvis today.
      </p>
    </div>
  );
}

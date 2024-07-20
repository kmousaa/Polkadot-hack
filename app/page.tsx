import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { Button } from "@nextui-org/button";

export default function Home() {
  return (
    <div className="flex bg-background flex-col h-screen items-center justify-center gap-4 py-8 md:py-10">
      <Button color="primary">Hello World!</Button>
      <Button color="secondary">Hello World!</Button>
    </div>
  );
}
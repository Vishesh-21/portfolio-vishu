import React from "react";
import { SubHeading } from "../sub-heading";
import { Code, Github, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full py-6 flex items-center justify-between mt-8">
      <SubHeading>Made with ❤️ by Vishesh Verma</SubHeading>
      <div className="flex items-center gap-4">
        <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer"/>
        <Github className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer"/>
        <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer"/>
        <Code className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer"/>
      </div>
    </footer>
  );
};

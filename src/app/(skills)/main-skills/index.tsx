import { TypescriptIcon } from "@/icons/typescript";
import { MainSkillCard } from "../../../components/skill-main-card";
import styles from "./styles.module.scss";
import { ReactIcon } from "@/icons/react";
import { NodeJsIcon } from "@/icons/nodejs";
import { JavascriptIcon } from "@/icons/javascript";
import { NextJsIcon } from "@/icons/nextjs";
import { ReactNativeIcon } from "@/icons/react-native";

export function MainSkills() {
  return (
    <div className={styles.container}>
      <MainSkillCard icon={<TypescriptIcon />} label="Typescript" />
      <MainSkillCard icon={<ReactIcon />} label="ReactJs" />
      <MainSkillCard icon={<NodeJsIcon />} label="NodeJs" />
      <MainSkillCard icon={<JavascriptIcon />} label="Javascript" />
      <MainSkillCard icon={<NextJsIcon />} label="NextJs" />
      <MainSkillCard icon={<ReactNativeIcon />} label="React Native" />
    </div>
  )
}
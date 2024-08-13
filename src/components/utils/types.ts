export type SkillType = 'frontend' | 'backend' | 'libraries' | 'cloud' | 'environments' | 'other';

export type Skill = {
  type: SkillType;
  name: string;
  colour: string;
  logo: string;
};

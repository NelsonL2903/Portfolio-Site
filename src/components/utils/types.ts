export type SkillType = 'Frontend' | 'Backend' | 'Libraries' | 'Cloud' | 'Environments' | 'Other';

export type Skill = {
  type: SkillType;
  name: string;
  colour: string;
  logo: string;
};

export type SkillType = 'Frontend' | 'Backend' | 'Frameworks' | 'Databases' | 'Cloud' | 'IDEs';

export type Skill = {
  type: SkillType;
  name: string;
  colour: string;
  logo: string;
};

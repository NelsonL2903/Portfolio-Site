import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { logos } from '../utils/skills-info';
import type { Skill } from '../utils/types';
import Image from 'next/image';
import { Fragment } from 'react';

const Capitalize = (text: string) => (text && text[0].toUpperCase() + text.slice(1)) || '';

export const SkillGrid = () => {
  const groupedSkills = logos.reduce((categories: { [key: string]: Skill[] }, skill: Skill) => {
    const category: Skill[] = categories[skill.type] || [];
    category.push(skill);
    categories[skill.type] = category;
    return categories;
  }, {});

  return (
    <>
      {Object.keys(groupedSkills).map((category) => (
        <Fragment key={category}>
          <Typography variant='h6' color='common.white' marginTop='10px'>
            {Capitalize(category)}:
          </Typography>
          <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
            width='100%'
            marginTop='10px'
            size={{ xs: 6 }}
          >
            {groupedSkills[category].map((skill) => (
              <img
                src={`https://img.shields.io/badge/${skill.name}-${skill.colour}?style=for-the-badge&logo=${skill.logo}&logoColor=white`}
                alt={skill.name}
                key={skill.name}
                style={{ margin: '3px' }}
                width='auto'
                height='30'
              />
            ))}
          </Grid>
        </Fragment>
      ))}
    </>
  );
};

export default SkillGrid;

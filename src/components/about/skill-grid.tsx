import { Grid, Typography } from '@mui/material';
import { logos } from '../utils/skills-info';
import type { Skill } from '../utils/types';
import Image from 'next/image';
import { Fragment } from 'react';

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
            {category}:
          </Typography>
          <Grid
            item
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
            width='100%'
            marginTop='10px'
            xs
          >
            {groupedSkills[category].map((skill) => (
              // <img
              //   src={`https://img.shields.io/badge/${skill.name}-${skill.colour}?style=for-the-badge&logo=${skill.logo}&logoColor=white`}
              //   alt={skill.name}
              //   style={{ margin: '3px' }}
              //   key={skill.name}
              // ></img>
              <Image
                src={`https://img.shields.io/badge/${skill.name}-${skill.colour}?style=for-the-badge&logo=${skill.logo}&logoColor=white`}
                alt={skill.name}
                key={skill.name}
                style={{ margin: '3px' }}
                width='100'
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

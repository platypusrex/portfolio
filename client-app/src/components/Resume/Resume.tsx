import React from 'react';
import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { ResumeSectionContentFragment, ResumeSectionFragment } from 'types/generated';

export interface ResumeProps {
  resumeSection: ResumeSectionFragment;
}

export const Resume: React.FC<ResumeProps> = ({
                                                resumeSection: { name, heading, contentCollection },
                                              }) => {
  const sectionContent = contentCollection?.items as ResumeSectionContentFragment[];
  const isSkillSetSection = name === 'skillset';

  return (
    <Grid templateColumns="repeat(12, 1fr)" columnGap={6}>
      <GridItem colSpan={{ base: 12, lg: 3 }}>
        <Heading as="h2" fontSize={24} mb={6}>
          {heading}
        </Heading>
      </GridItem>
      <GridItem colSpan={{ base: 12, lg: 9 }}>
        {sectionContent?.map(({ heading, subHeading, description, descriptionList }) => (
          <Box key={subHeading} mb={6}>
            {heading && subHeading && (
              <Flex
                justifyContent={{ base: 'space-between', md: 'initial' }}
                alignItems="flex-start"
                mb={4}
              >
                <Heading as="h3" fontSize={18} mr={4}>
                  {heading}
                </Heading>
                <Text fontSize={12} color="gray.600" textAlign="right">
                  {subHeading}
                </Text>
              </Flex>
            )}
            {description && <Text mb={4}>{description}</Text>}
            {descriptionList && (
              <UnorderedList
                display="inline-block"
                sx={{
                  columnCount: isSkillSetSection ? { base: '2', md: '3' } : {},
                }}
              >
                {descriptionList?.map((desc) => (
                  <ListItem
                    key={desc}
                    listStyleType="square"
                    fontSize={isSkillSetSection ? 16 : 14}
                    pb={isSkillSetSection ? 'initial' : 2}
                  >
                    {desc}
                  </ListItem>
                ))}
              </UnorderedList>
            )}
          </Box>
        ))}
        <Divider orientation="horizontal" mb={6} />
      </GridItem>
    </Grid>
  );
};

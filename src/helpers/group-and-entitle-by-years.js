import {
  groupBy,
  flow,
} from 'lodash';


const getProjects = (sections) => {
  return sections.flatMap((section) => section.children).filter(project => !project.hidden);
}

const groupByYears = (projects) => {
  return groupBy(projects, (project) => project.year);
}

const entitleGroupsByYears = (groups) => {
  const years = Object.keys(groups);
  return Object.values(groups)
    .map(
      (group, index) => {
        return {
          title: years[index],
          children: group
        }
      }
    )
}

const reverse = (array) => [...array].reverse();

const groupAndEntitleByYears = flow(
  getProjects,
  groupByYears,
  entitleGroupsByYears,
  reverse
);

export default groupAndEntitleByYears;

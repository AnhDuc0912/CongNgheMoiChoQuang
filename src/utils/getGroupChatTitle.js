import _ from "lodash";

export function getGroupChatTitle(users, loggingUserId) {
  const otherMembers = _.filter(users, x => x._id !== loggingUserId);
  const title = otherMembers
    .map(item => {
      const fullName = item.fullName;
      return fullName.substring(fullName.lastIndexOf(' '), fullName.length);
    })
    .join(',');

  return title + ' và bạn';
}
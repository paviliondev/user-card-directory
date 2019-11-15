import {
  default as DiscourseURL,
  userPath,
  groupPath
} from "discourse/lib/url";

import { default as computed } from 'ember-addons/ember-computed-decorators';
import User from 'discourse/models/user';
import UserBadge from "discourse/models/user-badge";

export default Ember.Component.extend({
  router: Ember.inject.service(),
  classNames: ["directory-user-card"],
  
  @computed('item.user')
  itemUser(user) {
    if (!Ember.isEmpty(user.user.featured_user_badge_ids)) {
      const userBadgesMap = {};
      UserBadge.createFromJson(user).forEach(userBadge => {
        userBadgesMap[userBadge.get("id")] = userBadge;
      });
      user.user.featured_user_badges = user.user.featured_user_badge_ids.map(
        id => userBadgesMap[id]
      );
    }
    return User.create(user.user);
  },

  actions: {
    showUser(user) {
      DiscourseURL.routeTo(userPath(user.username_lower));
    },

    showGroup(group) {
      DiscourseURL.routeTo(groupPath(group.name));
    }
  }
});
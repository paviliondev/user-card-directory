import {
  default as DiscourseURL,
  userPath,
  groupPath
} from "discourse/lib/url";

import { default as computed } from 'ember-addons/ember-computed-decorators';
import User from 'discourse/models/user';

export default Ember.Component.extend({
  router: Ember.inject.service(),
  classNames: ["directory-user-card"],
  
  @computed('item.user')
  itemUser(user) {
    return User.create(user);
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
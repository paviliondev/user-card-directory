import UserCardContents from 'discourse/components/user-card-contents';

export default UserCardContents.extend({
  elementId: null,
  layoutName: 'components/user-card-contents',
  visible: true,
  username: Ember.computed.alias('user.username'),

  didInsertElement() {
    const url = this.get("user.card_background_upload_url");
    const bg = Ember.isEmpty(url)
      ? ""
      : `url(${Discourse.getURLWithCDN(url)})`;
    this.element.style.backgroundImage = bg;
  },

  willDestroyElement() {
  },

  keyUp() {
  },

  cleanUp() {
  }
});
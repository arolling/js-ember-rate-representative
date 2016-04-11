import Ember from 'ember';

export function bodyFormat(params) {
  var body = Ember.Handlebars.Utils.escapeExpression(params[0]);
  body = body.replace(/\n\r?/g, '<br>');
  var formatted = new Ember.Handlebars.SafeString(body);
  return formatted;
}

export default Ember.Helper.helper(bodyFormat);

//Modified from solution found at https://gist.github.com/lagartoflojo/6090175, in the replies.

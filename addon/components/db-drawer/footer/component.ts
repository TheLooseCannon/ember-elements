import Component from '@ember/component';
// @ts-ignore: Ignore import of compiled template
import template from './template';
import { classNames, layout } from '@ember-decorators/component';
import * as Classes from '../../../-private/common/classes';
@layout(template)
@classNames(Classes.DRAWER_FOOTER)
export default class DbDrawerFooter extends Component {
  // normal class body definition here
};

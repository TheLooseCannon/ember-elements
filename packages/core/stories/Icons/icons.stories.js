import { hbs } from 'ember-cli-htmlbars';
import { action } from '@ember/object';
// import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Icons/Miscellaneous',
};

const Template = (args) => ({
  template: hbs`<Icon
      @icon={{this.icon}}
      @iconSize={{value}}
      @intent={{intent}}
      />`,
  context: args,
});

export const Asterisk = Template.bind({});
Asterisk.args = {
  icon: 'asterisk',
};

export const Badge = Template.bind({});
Badge.args = {
  icon: 'badge',
};

export const BankAccount = Template.bind({});
BankAccount.args = { icon: 'bank-account' };

export const Barcode = Template.bind({});
Barcode.args = { icon: 'barcode' };

export const Blank = Template.bind({});
Blank.args = { icon: 'blank' };

export const Book = Template.bind({});
Book.args = { icon: 'book' };

export const Briefcase = Template.bind({});
Briefcase.args = { icon: 'briefcase' };

export const Calculator = Template.bind({});
Calculator.args = { icon: 'calculator' };

export const CellTower = Template.bind({});
CellTower.args = { icon: 'cell-tower' };

export const Crown = Template.bind({});
Crown.args = { icon: 'crown' };

export const Cube = Template.bind({});
Cube.args = { icon: 'cube' };

export const CubeAdd = Template.bind({});
CubeAdd.args = { icon: 'cube-add' };

export const CubeRemove = Template.bind({});
CubeRemove.args = { icon: 'cube-remove' };

export const Delta = Template.bind({});
Delta.args = { icon: 'delta' };

export const Dollar = Template.bind({});
Dollar.args = { icon: 'dollar' };

export const Dot = Template.bind({});
Dot.args = { icon: 'dot' };

export const Euro = Template.bind({});
Euro.args = { icon: 'euro' };

export const Flame = Template.bind({});
Flame.args = { icon: 'flame' };

export const FullCircle = Template.bind({});
FullCircle.args = { icon: 'full-circle' };

export const Glass = Template.bind({});
Glass.args = { icon: 'glass' };

export const Globe = Template.bind({});
Globe.args = { icon: 'globe' };

export const GlobeNetwork = Template.bind({});
GlobeNetwork.args = { icon: 'globe-network' };

export const Heart = Template.bind({});
Heart.args = { icon: 'heart' };

export const HeartBroken = Template.bind({});
HeartBroken.args = { icon: 'heart-broken' };

export const Home = Template.bind({});
Home.args = { icon: 'home' };

export const IDNumber = Template.bind({});
IDNumber.args = { icon: 'id-number' };

export const IPAddress = Template.bind({});
IPAddress.args = { icon: 'ip-address' };

export const Lifesaver = Template.bind({});
Lifesaver.args = { icon: 'lifesaver' };

export const Lightbulb = Template.bind({});
Lightbulb.args = { icon: 'lightbulb' };

export const Moon = Template.bind({});
Moon.args = { icon: 'moon' };

export const Mountain = Template.bind({});
Mountain.args = { icon: 'mountain' };

export const PrescriptionNew = Template.bind({});
PrescriptionNew.args = { icon: 'new-prescription' };

export const Ninja = Template.bind({});
Ninja.args = { icon: 'ninja' };

export const Office = Template.bind({});
Office.args = { icon: 'office' };

export const Prescription = Template.bind({});
Prescription.args = { icon: 'prescription' };

export const Pulse = Template.bind({});
Pulse.args = { icon: 'pulse' };

export const Ring = Template.bind({});
Ring.args = { icon: 'ring' };

export const Satellite = Template.bind({});
Satellite.args = { icon: 'satellite' };

export const Shield = Template.bind({});
Shield.args = { icon: 'shield' };

export const Shop = Template.bind({});
Shop.args = { icon: 'shop' };

export const ShoppingCart = Template.bind({});
ShoppingCart.args = { icon: 'shopping-cart' };

export const Snowflake = Template.bind({});
Snowflake.args = { icon: 'snowflake' };

export const Square = Template.bind({});
Square.args = { icon: 'square' };

export const Torch = Template.bind({});
Torch.args = { icon: 'torch' };

export const Tree = Template.bind({});
Tree.args = { icon: 'tree' };
export const Wrench = Template.bind({});
Wrench.args = { icon: 'wrench' };

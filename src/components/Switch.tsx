import {Switch, SwitchProps} from '@rneui/themed';

const SwitchSelf: React.FC<SwitchProps> = props => {
  return (
    <Switch
      {...props}
      style={{
        transform: [{scaleX: 0.8}, {scaleY: 0.8}],
        // FIXME not working???
        // width: 60,
        // height: 20,
      }}
    />
  );
};

export default SwitchSelf;

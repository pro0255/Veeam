import { initializeMonaco } from '../utils/initializeMonaco';

initializeMonaco();

export const useFormEditor = () => {
  const validate = (markers: any) => {
    // model markers
    console.log(markers);
    markers.forEach((marker: any) => console.log('onValidate:', marker.message));
  };

  return { validate };
};

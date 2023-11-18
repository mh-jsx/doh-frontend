import useAlert from 'components/core-ui/alert/use-alert';

const useButlerCall = () => {
  const { showAlert, hideAlert, show } = useAlert();

  const handleButlerCall = () => {
    // TODO: call butler api

    showAlert();
  };
  return { hideAlert, show, handleButlerCall };
};

export default useButlerCall;

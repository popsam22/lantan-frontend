import ConfirmationPage from "../../components/ConfirmationPage";

const Success = () => {
  return (
    <ConfirmationPage
      heading="Success"
      placeholder="Password reset successfully, login with new password"
      buttonText="Proceed to Login"
    />
  );
};

export default Success;

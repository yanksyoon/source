import CreatePrivateSharedStackRoutes from "routes/shared";

const ExtraScreens = [];

export default function Profiletab() {
  return (
    <CreatePrivateSharedStackRoutes
      extraScreens={ExtraScreens}
      initialRouteName="Profile"
    />
  );
}

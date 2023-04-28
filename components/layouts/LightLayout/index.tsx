type TLightLayoutProps = {
  children?: JSX.Element | JSX.Element[];
};

export const LightLayout = ({ children }: TLightLayoutProps) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        color: "black",
      }}
    >
      {children}
    </div>
  );
};

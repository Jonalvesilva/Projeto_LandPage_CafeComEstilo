type props = {
  children: React.ReactNode;
};
export function FullPage(props: props) {
  return (
    <div className="font-sans bg-white flex flex-col min-h-screen w-full">
      <div>{props.children}</div>
    </div>
  );
}

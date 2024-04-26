interface ServiceProps {
  params: {
    key: string;
  };
}

const Service: React.FC<ServiceProps> = (props) => {
  return (
    <div className="w-full flex items-center justify-center py-7 bg-primary border-b border-border rounded-lg">
      <h3 className="text-typo uppercase">
        {props?.params?.key || "This is content detail page"}
      </h3>
    </div>
  );
};

export default Service;

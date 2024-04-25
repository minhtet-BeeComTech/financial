"use client";

export default function ContentDetail(props: any) {
  return (
    <>
      <div className="w-full flex items-center justify-center py-7 bg-primary-50 border-b border-border">
        <h3 className="text-typo uppercase">
          {props?.params?.key || "This is content detail page"}
        </h3>
      </div>
    </>
  );
}

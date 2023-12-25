import { TestProps } from "@/src/utils";
import { VariantProps, cva } from "class-variance-authority";
import { FC, forwardRef } from "react";
import { Group } from "react-aria-components";

export interface IVoucher extends VariantProps<typeof cardClasses>, TestProps {
  className?: string;
  image?: string;
  label: string;
  description: string;
  sponsor: string;
  sponsorLogo: string;
  value: string;
}

const cardClasses = cva(["st-voucher", "s-inline-flex s-relative s-overflow-hidden"], {
  variants: {
    withImage: {
      true: "",
      false: "",
    },
  },
});

export const Voucher: FC<IVoucher> = forwardRef<HTMLDivElement, IVoucher>((props, ref) => {
  const { className, image, label, description, sponsorLogo, sponsor, value } = props;
  const withImage = Boolean(image);

  return (
    <Group className={cardClasses({ className, withImage })} ref={ref}>
      <div className="s-flex s-rounded-md s-border-[1px] s-border-gray-100 dark:s-border-white-100">
        {withImage ? <img src={image} alt={label} className="s-aspect-square s-w-24" /> : ""}
        <div className="s-p-4">
          <p className="s-mb-1 s-text-sm s-font-bold dark:s-text-white-900">{label}</p>
          <p className="s-mb-5 s-text-xs s-text-gray-500 dark:s-text-white-500">{description}</p>
          <div className="s-flex s-items-center s-gap-1">
            {sponsorLogo ? (
              <img src={sponsorLogo} alt={sponsor} className="s-h-4 s-w-4 s-rounded-sm" />
            ) : (
              <div className="s-h-4 s-w-4 s-rounded-sm s-bg-gray-100 dark:s-bg-white-200" />
            )}
            <p className="s-text-xs s-text-gray-500 dark:s-text-white-500">{sponsor}</p>
          </div>
        </div>
        <div
          className={`s-px-4 s-relative s-flex s-items-center s-justify-center dark:s-text-white-900 s-border-l-[1px] s-border-gray-100 s-border-dashed dark:s-border-white-100 ${
            withImage ? "" : "s-w-24 s-aspect-square"
          }`}
        >
          <p className="s-text-lg s-font-bold">{value}</p>
          <div className="s-absolute s-left-0 s-top-0 s-h-5 s-w-5 -s-translate-x-1/2 -s-translate-y-1/2 s-rounded-full s-border-[1px] s-border-gray-100 s-bg-white-900 dark:s-bg-black dark:s-border-white-100" />
          <div className="s-absolute s-bottom-0 s-left-0 s-h-5 s-w-5 -s-translate-x-1/2 s-translate-y-1/2 s-rounded-full s-border-[1px] s-border-gray-100 s-bg-white-900 dark:s-bg-black dark:s-border-white-100" />
        </div>
      </div>
    </Group>
  );
});

Voucher.defaultProps = {
  label: "Label",
  description: "Supporting text",
  sponsor: "Sponsor",
  sponsorLogo: "",
  value: "0K",
  image: "",
};

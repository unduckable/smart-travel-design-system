import { TestProps } from "@/src/utils";
import { VariantProps, cva } from "class-variance-authority";
import { FC, forwardRef, useMemo } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperProps, SwiperRef, SwiperSlide } from "swiper/react";

export interface IBannerItem {
  id: string;
  title?: string;
  description?: string;
  image: string;
}

type ExposedSwiperProps =
  | "slidesPerView"
  | "spaceBetween"
  | "freeMode"
  | "pagination"
  | "className"
  | "onSliderMove"
  | "onTouchStart"
  | "onTouchEnd";
export interface IBanner extends Pick<SwiperProps, ExposedSwiperProps>, VariantProps<typeof bannerClasses>, TestProps {
  /**
   * Defines the slides to be rendered in the Carousel.
   */
  items: IBannerItem[];
  /**
   *  Enables free scroll functionality.
   */
  freeMode?: boolean;
  /**
   *  Enables pagination.
   */
  pagination?: boolean;
  children?: (item: IBannerItem) => JSX.Element;
}

const bannerClasses = cva(
  [
    "st-carousel",
    "[&_.st-pagination]:s-static [&_.st-pagination]:s-m-auto [&_.st-pagination]:s-mt-3",
    "[&_>_.st-pagination.swiper-pagination-bullets-dynamic.swiper-pagination-bullets]:s-transform-none",
    "[&_.swiper-pagination-bullet.swiper-pagination-bullet-active-next-next]:s-scale-[66%]",
    "[&_.swiper-pagination-bullet.swiper-pagination-bullet-active-next]:s-scale-[83%]",
    "[&_.swiper-pagination-bullet.swiper-pagination-bullet-active]:s-scale-100",
    "[&_.swiper-pagination-bullet.swiper-pagination-bullet-active-prev]:s-scale-[83%]",
    "[&_.swiper-pagination-bullet.swiper-pagination-bullet-active-prev-prev]:s-scale-[66%]",
    "[--swiper-pagination-bullet-size:6px]",
  ],
  {
    variants: {
      freeMode: {
        true: "[&_.swiper-slide]:s-w-fit",
      },
    },
  },
);

const defaultPaginationConfig: SwiperProps["pagination"] = {
  clickable: true,
  type: "bullets",
  dynamicBullets: true,
  horizontalClass: "st-pagination",
};

export const Banner: FC<IBanner> = forwardRef<SwiperRef, IBanner>((props, ref) => {
  const { className, children, items, freeMode, pagination, ...rest } = props;

  const modules = useMemo(() => {
    const m = [];
    if (freeMode) m.push(FreeMode);
    if (pagination) m.push(Pagination);
    return m;
  }, [freeMode, pagination]);

  const paginationConfig = pagination ? defaultPaginationConfig : false;
  const classes = bannerClasses({ className, freeMode });

  return (
    <Swiper {...rest} ref={ref} modules={modules} freeMode={freeMode} pagination={paginationConfig} className={classes}>
      {items.map((item) => (
        <SwiperSlide>{children(item)}</SwiperSlide>
      ))}
    </Swiper>
  );
});

Banner.defaultProps = {
  slidesPerView: "auto",
  freeMode: true,
  pagination: false,
  items: [],
};

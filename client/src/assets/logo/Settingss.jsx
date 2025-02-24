import React from "react";

const Settingss = () => {
  return (
    <div style={{ marginRight: "1rem", display: "flex", alignItems: "center" }}>
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.7776 0.456055C13.6687 0.456055 14.5348 0.797049 15.1558 1.38973C15.7756 1.98589 16.1178 2.80358 16.0917 3.63287C16.0942 3.81961 16.1601 4.03534 16.2796 4.22439C16.4775 4.53755 16.7898 4.75792 17.1607 4.84839C17.5316 4.93422 17.9198 4.88783 18.2496 4.70573C19.8426 3.85788 21.8699 4.36589 22.7796 5.8389L23.5549 7.09037C23.5748 7.12401 23.5922 7.15648 23.6072 7.19012C24.431 8.64109 23.881 10.4678 22.3502 11.3018C22.1275 11.4212 21.947 11.5883 21.8226 11.7901C21.6297 12.1021 21.5762 12.4732 21.6732 12.8142C21.7728 13.1622 22.0105 13.451 22.3453 13.6296C23.1007 14.0344 23.6644 14.7164 23.8897 15.5039C24.1149 16.2903 23.9917 17.1439 23.5524 17.8479L22.7261 19.1307C21.8163 20.5875 19.7891 21.092 18.2123 20.243C18.002 20.1305 17.7593 20.069 17.5179 20.0632H17.5104C17.1507 20.0632 16.7811 20.2059 16.5123 20.4553C16.2398 20.7093 16.0904 21.048 16.0929 21.4075C16.0842 23.1113 14.5971 24.4892 12.7776 24.4892H11.2183C9.39009 24.4892 7.90292 23.1044 7.90292 21.4005C7.90044 21.1906 7.83572 20.9726 7.71501 20.7835C7.51962 20.4657 7.20352 20.2384 6.83888 20.1479C6.47674 20.0574 6.07974 20.1073 5.75369 20.2836C4.97215 20.6896 4.05246 20.7882 3.21119 20.5678C2.37116 20.3463 1.64562 19.8081 1.22 19.0948L0.442193 17.8456C-0.467531 16.3749 0.073823 14.4902 1.64935 13.6412C2.09612 13.4011 2.37364 12.9534 2.37364 12.4732C2.37364 11.993 2.09612 11.5442 1.64935 11.3041C0.0725785 10.4504 -0.467531 8.56106 0.440948 7.09037L1.28471 5.79946C2.18199 4.34502 4.21052 3.83237 5.79227 4.67905C6.00756 4.79852 6.24153 4.85883 6.47923 4.86115C7.25454 4.86115 7.90292 4.26499 7.91537 3.53197C7.91039 2.72355 8.25263 1.94762 8.87612 1.36189C9.5021 0.777332 10.3334 0.456055 11.2183 0.456055H12.7776ZM12.7776 2.19582H11.2183C10.8325 2.19582 10.4716 2.33616 10.199 2.58901C9.92771 2.84302 9.77962 3.18053 9.78211 3.54008C9.75597 5.23578 8.2688 6.60092 6.46802 6.60092C5.89058 6.59512 5.33429 6.45014 4.85143 6.18105C4.17318 5.8215 3.2871 6.04303 2.89011 6.68675L2.04759 7.97765C1.6618 8.60165 1.89825 9.4263 2.58521 9.79861C3.60445 10.3484 4.24038 11.3737 4.24038 12.4732C4.24038 13.5728 3.60445 14.5969 2.58272 15.1478C1.89949 15.5167 1.66304 16.3367 2.05879 16.9746L2.84406 18.2365C3.0382 18.5624 3.35555 18.7979 3.72267 18.8941C4.08856 18.9892 4.49177 18.9486 4.82778 18.7747C5.32185 18.5044 5.8968 18.3641 6.47425 18.3641C6.75924 18.3641 7.04422 18.3977 7.32299 18.4673C8.16427 18.6784 8.89478 19.2026 9.32787 19.9067C9.60912 20.3486 9.76469 20.8647 9.76966 21.3913C9.76966 22.1452 10.4193 22.7495 11.2183 22.7495H12.7776C13.5728 22.7495 14.2225 22.1487 14.2262 21.4075C14.2212 20.5887 14.5647 19.8104 15.1932 19.2247C15.8129 18.6471 16.6791 18.3003 17.5452 18.3235C18.1127 18.3362 18.6591 18.4789 19.1407 18.7341C19.8339 19.1041 20.7187 18.8837 21.1194 18.2458L21.9458 16.9618C22.13 16.6661 22.1835 16.2949 22.0852 15.9528C21.9881 15.6106 21.7442 15.3137 21.4156 15.1385C20.6465 14.7256 20.0977 14.0599 19.87 13.2619C19.6447 12.479 19.7679 11.6242 20.2072 10.9202C20.4935 10.4562 20.9128 10.0654 21.4156 9.79629C22.0901 9.42862 22.3266 8.60629 21.9346 7.96606C21.9184 7.94054 21.9035 7.91386 21.891 7.88603L21.1617 6.70762C20.7648 6.06391 19.8812 5.84238 19.188 6.21005C18.4388 6.62296 17.5477 6.74126 16.6915 6.53133C15.8366 6.32487 15.1197 5.82034 14.673 5.1082C14.3867 4.66281 14.2312 4.14436 14.2262 3.61663C14.2374 3.21997 14.0881 2.86389 13.8168 2.60293C13.5467 2.34312 13.1671 2.19582 12.7776 2.19582ZM12.0034 8.54494C14.3269 8.54494 16.2173 10.3079 16.2173 12.4733C16.2173 14.6388 14.3269 16.3994 12.0034 16.3994C9.67993 16.3994 7.78955 14.6388 7.78955 12.4733C7.78955 10.3079 9.67993 8.54494 12.0034 8.54494ZM12.0034 10.2847C10.7091 10.2847 9.65629 11.2671 9.65629 12.4733C9.65629 13.6796 10.7091 14.6596 12.0034 14.6596C13.2977 14.6596 14.3505 13.6796 14.3505 12.4733C14.3505 11.2671 13.2977 10.2847 12.0034 10.2847Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default Settingss;

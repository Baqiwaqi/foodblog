import {
   LucideProps,
   Moon,
   SunMedium,
   Twitter,
   Clock,
   Users,
   type Icon as LucideIcon,
   UserPlus,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
   sun: SunMedium,
   moon: Moon,
   twitter: Twitter,
   clock: Clock,
   people: Users,
   logo: (props: LucideProps) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
         <path
            fill="currentColor"
            d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"
         />
      </svg>
   ),
   gitHub: (props: LucideProps) => (
      <svg viewBox="0 0 438.549 438.549" {...props}>
         <path
            fill="currentColor"
            d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
         ></path>
      </svg>
   ),
   bizworx: (props: LucideProps) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120.3272 110.8501" {...props}>
         <defs>
            <linearGradient id="linear-gradient" x1="13.7389" y1="92.8003" x2="116.6042" y2="17.6615" gradientUnits="userSpaceOnUse">
               <stop offset="0" stop-color="#4e287c" />
               <stop offset="1" stop-color="#c52c63" />
            </linearGradient>
            <linearGradient id="linear-gradient-2" x1="14.7238" y1="94.1486" x2="117.589" y2="19.0098" />
            <linearGradient id="linear-gradient-3" x1="19.2102" y1="100.2905" x2="122.0754" y2="25.1517" />
            <linearGradient id="linear-gradient-4" x1="10.1433" y1="87.8779" x2="113.0085" y2="12.7391" />
            <linearGradient id="linear-gradient-5" x1="38.8801" y1="127.2187" x2="141.7454" y2="52.0799" />
            <linearGradient id="linear-gradient-6" x1="-4.6434" y1="67.6349" x2="98.2219" y2="-7.5039" />
         </defs>
         <g id="logoMark">
            <path id="logoMark_CompoundPathItem_" data-name="logoMark &lt;CompoundPathItem&gt;" d="M114.2676,40.7971,79.5335,6.06A20.5538,20.5538,0,0,0,64.9038,0h-.25A20.6623,20.6623,0,0,0,51.4965,4.9292c-.0329.0263-.0657.056-.1019.0855-.0328.0295-.069.0592-.0986.0887-.1807.1577-.3548.3155-.529.4766-.1676.1575-.3319.3186-.4962.48L15.54,40.7971a20.6821,20.6821,0,0,0,0,29.2594l.7.7032,3.7133,3.71,30.3176,30.3208c.1906.194.391.3845.5948.5751.1445.1282.2859.2564.43.3812l.0132.0132.0887.0788.0887.0789a20.7363,20.7363,0,0,0,12.8487,4.9258h.0657c.1775.0034.3483.0066.5159.0066a20.4969,20.4969,0,0,0,14.6166-6.06l30.3012-30.3043c.0427-.0395.0887-.0822.1314-.125l3.5983-3.5982.7032-.7065a20.69,20.69,0,0,0,0-29.2594Zm-3.4865,25.7761-.7033.7065L96.95,80.4078,76.047,101.3072A15.6119,15.6119,0,0,1,64.94,105.9209c-.1544,0-.3121-.0032-.4732-.0065a15.7358,15.7358,0,0,1-9.9273-3.8809h-.0033c-.2661-.2333-.529-.4764-.7788-.7263L32.8544,80.4078l-9.53-9.5331-3.5982-3.5982-.7033-.7033a15.7638,15.7638,0,0,1,0-22.293L53.7573,9.5429c.25-.25.5127-.493.7821-.7295a15.6558,15.6558,0,0,1,4.7386-2.849c.2136-.0821.4305-.1611.6441-.2333.3286-.1085.6638-.2071,1.0022-.2925a15.3738,15.3738,0,0,1,2.044-.3944c.2333-.0295.4666-.0525.6966-.069.3385-.0263.677-.0427,1.022-.046h.2169A15.6713,15.6713,0,0,1,76.047,9.5429L110.7811,44.28a15.7638,15.7638,0,0,1,0,22.293Z" />
            <path id="logoMark_CompoundPathItem_2" data-name="logoMark &lt;CompoundPathItem&gt;" d="M88.2647,52.4331A23.5587,23.5587,0,1,0,46.5871,70.2569a24.0407,24.0407,0,0,0,1.6529,1.83l1.7416,1.745L64.9,88.7511,79.8194,73.8322h.0033l1.7416-1.745a22.6754,22.6754,0,0,0,1.65-1.8336A23.5439,23.5439,0,0,0,88.2647,52.4331Zm-8.56,14.311a18.6929,18.6929,0,0,1-1.6266,1.8566L64.9,81.778,53.4715,70.3457l-1.745-1.745A18.8,18.8,0,0,1,50.1,66.7441,18.5985,18.5985,0,0,1,51.7265,42.25c.2268-.2267.4535-.447.6934-.6606.0756-.0656.1511-.1346.2267-.2s.1512-.1314.2268-.1938l.0065-.0066c.2038-.1742.4141-.3451.6244-.5061.0526-.0426.1085-.0855.161-.1248.1413-.1085.2925-.2136.4371-.3188l.0295-.02c.0954-.069.1906-.1379.2859-.1972.22-.1543.4437-.2989.67-.437.1117-.0722.23-.1412.3418-.21.0821-.0493.1676-.0985.253-.148.25-.1412.4995-.2759.7525-.4008q.1281-.069.2563-.1282c.0855-.0427.1709-.0855.2563-.1248.1709-.0822.3418-.1577.516-.2333.0065,0,.0065-.0034.0065-.0034.2333-.1019.4765-.2.72-.2923.1774-.0724.3615-.1382.5422-.2006.1249-.0427.25-.0854.3746-.1248.25-.0822.4995-.1611.7525-.23h.0066c.1249-.0361.253-.0722.3812-.1018.1249-.0328.25-.0657.3779-.0921.1183-.0295.2366-.0558.3582-.0821.1183-.0263.2366-.0493.3582-.0722l.0558-.01c.2563-.0526.516-.0953.7755-.1314.1282-.02.2564-.0361.3845-.0526q.3894-.0494.7788-.0788c.1348-.0131.2629-.02.3911-.03.26-.02.5192-.03.7821-.0329.26-.0064.5257-.0064.7853,0,.26.0034.5225.0132.7821.0329.1315.01.2563.0166.3911.03.26.0164.5192.0459.7788.0788.1282.0165.2563.0329.3845.0526.26.0361.5192.0788.7755.1314l.0591.01c.1183.0229.2366.0459.3549.0722.1216.0263.24.0526.3582.0821.1282.0264.253.0593.3779.0921.1282.03.2563.0657.3812.1018h.0066c.0164.0066.0361.01.0526.0165.2365.0656.4666.1346.7.2136.1249.0394.25.0821.3746.1248.1807.0624.3648.1282.5422.2006.2432.0919.4864.19.72.2923,0,0,0,.0034.0065.0034.1742.0756.3418.1543.516.2333.0854.0393.1708.0821.2563.1248q.1281.0592.2563.1282c.1676.0822.3385.1709.5028.2661.069.0362.138.0757.207.1118.0986.0558.1972.1117.2957.1709.1118.069.23.138.3418.21.0164.01.0361.0231.0558.0329.1019.0657.2071.1314.3089.1972s.2038.1379.3089.2069c.1019.069.2071.1414.3122.217.1446.1052.2958.21.4371.3188.0558.0393.1084.0822.161.1248.207.161.414.3253.6145.4995a.0228.0228,0,0,1,.0164.0132c.1545.128.3024.26.4535.3942.24.2136.47.4339.6934.6606A18.662,18.662,0,0,1,79.7044,66.7441Z" />
            <path id="logoMark_CompoundPathItem_3" data-name="logoMark &lt;CompoundPathItem&gt;" d="M110.0778,67.28,81.5643,38.7628a23.59,23.59,0,0,0-33.3243,0L19.7265,67.2765,16.24,70.76l3.7133,3.71a20.9576,20.9576,0,0,0,29.4993-.1085l.5291-.529,3.49-3.4865L63.04,60.7748a2.6356,2.6356,0,0,1,3.728,0l9.5651,9.5707,3.4866,3.4865h.0033l.5291.529a20.8755,20.8755,0,0,0,14.8071,6.1221c.5981,0,1.1962-.0263,1.791-.0755a20.8306,20.8306,0,0,0,12.8848-5.9216c.0427-.0395.0887-.0822.1314-.125l3.5983-3.5982ZM83.835,70.8747l-4.1306-4.1306L67.8728,54.91a4.1988,4.1988,0,0,0-5.9383,0L45.9693,70.8747a16.0324,16.0324,0,0,1-22.6446,0l-.1117-.115L41.52,52.45l.0066-.0066,10.2-10.1935c.2268-.2267.4535-.447.6934-.6606.0756-.0656.1511-.1346.2267-.2.0723-.0658.1512-.1282.2268-.1938l.0065-.0066c.0033-.0034.0033-.0066.01-.0066.1512-.1282.299-.25.4568-.3713.0526-.0428.1051-.0887.1577-.1282.0526-.0426.1085-.0855.161-.1248.1413-.1085.2925-.2136.4371-.3188l.0295-.02q.1431-.1035.2859-.1972c.22-.1543.4437-.2989.67-.437.1117-.0722.23-.1412.3418-.21.0821-.0493.1676-.0985.253-.148.25-.1412.4995-.2759.7525-.4008.0822-.0427.1676-.0887.2563-.1282.0855-.0427.1709-.0855.2563-.1248.1742-.079.3451-.1577.516-.2333.0065,0,.0065-.0034.0065-.0034.2333-.1019.4765-.2.72-.2923.1774-.0692.3582-.1348.5422-.2006.1249-.0427.25-.0854.3746-.1248.253-.0822.4995-.1578.7525-.23h.0066c.1249-.0361.253-.069.3812-.1018.1249-.0328.25-.0625.3779-.0921.1183-.0295.2366-.0558.3582-.0821.1183-.0263.2366-.0493.3582-.0722l.0558-.01c.2563-.0526.516-.0953.7755-.1314.1282-.0165.2564-.0361.3845-.0526.2629-.0295.5225-.0592.7788-.0788.1348-.0131.2629-.02.3911-.03.2628-.0163.5258-.0261.7821-.0329.26-.0064.5257-.0064.7853,0,.2563.0068.5225.0166.7821.0329.1315.01.2563.0166.3911.03.2563.02.5192.0493.7788.0788.1282.0165.2563.0329.3845.0526.26.0361.5192.0788.7755.1314l.0591.01c.1183.0229.2366.0459.3549.0722s.2366.0526.3582.0821c.1282.03.253.0593.3779.0921.1282.0328.2563.0657.3812.1018h.0066c.0164.0066.0361.01.0526.0165.2333.0656.4633.138.7.2136.1249.0394.25.0821.3746.1248.184.0658.3648.1314.5422.2006.2432.0919.4864.19.72.2923,0,0,0,.0034.0065.0034.1742.0756.3418.1543.516.2333.0854.0393.1708.0821.2563.1248.0854.0395.1709.0855.2563.1282.1709.0854.3352.1741.5028.2661.0535.0281.107.0581.1606.0871l.335.1912c.1138.07.2348.1408.3489.2146.0164.01.0361.0231.0558.0329.1019.0657.2071.1314.3089.1972s.2038.1379.3089.2069c.1019.069.2071.1414.3122.217.1446.1052.2958.21.4371.3188.0558.0393.1084.0822.161.1248.207.161.414.3253.6145.4995a.0228.0228,0,0,1,.0164.0132q.2318.192.4535.3942c.24.2136.47.4339.6934.6606L88.2647,52.4331,106.5913,70.76l-.1117.115A16.0324,16.0324,0,0,1,83.835,70.8747Z" />
            <path id="logoMark_CompoundPathItem_4" data-name="logoMark &lt;CompoundPathItem&gt;" d="M32.9629,30.3374l4.2588-4.2556L53.7573,9.5429c.25-.25.5127-.493.7821-.7295a15.6558,15.6558,0,0,1,4.7386-2.849c.2136-.0821.4305-.1611.6441-.2333.3286-.1085.6638-.2071,1.0022-.2925a15.3738,15.3738,0,0,1,2.044-.3944c.2333-.0262.4666-.0493.6966-.069.3385-.0263.677-.0427,1.022-.046h.0263L64.6869,0H51.2632c-.3681.0034-.7394.02-1.1074.0428A20.5494,20.5494,0,0,0,36.88,6.06L9.441,33.5019,8.2481,34.6947a30.1769,30.1769,0,0,0,.0362,41.5c.0164.0165.03.0329.046.0494l1.0252,1.0251c.0165.0166.0329.03.0493.0461L36.88,104.7905a20.54,20.54,0,0,0,14.6166,6.06c.1413,0,.2793,0,.4173-.0032H51.94l12.3952-.0034h.0657l.0657-4.9291a15.7358,15.7358,0,0,1-9.9273-3.8809h-.0033c-.2661-.2333-.529-.4764-.7788-.7263L37.2184,84.7716,32.96,80.5129l-.1052-.1051L19.7265,67.2765l-.7033-.7033a15.7638,15.7638,0,0,1,0-22.293ZM9.4771,55.4268a20.5432,20.5432,0,0,0,6.0629,14.63l.7.7032,3.7133,3.71,5.8131,5.8131,5.3005,5.3038,19.204,19.2039c.1906.194.391.3845.5948.5751.1445.1282.2859.2564.43.3812l.0132.0132c.0559.0525.1216.1019.1774.1544v.0033h.3681c-.0986.0032-.1972.0032-.2958.0032H51.5a15.6551,15.6551,0,0,1-11.1366-4.6137L24.028,84.972,12.5858,73.53c-.0887-.0855-.1742-.1709-.26-.2563-.0723-.0723-.1479-.1479-.2169-.2235a.6.6,0,0,1-.0657-.0658L5.8427,66.7836A16.1424,16.1424,0,0,1,1.0154,55.4465,15.6587,15.6587,0,0,1,5.6291,44.28l6.2732-6.27c.046-.0493.0953-.0987.1413-.1446a.6184.6184,0,0,1,.0657-.0658l.4765-.4765.0295-.03L24.028,25.878,40.3632,9.5429a15.656,15.656,0,0,1,10.93-4.6137h.2037v.0033c-.0723.0559-.138.1151-.2.1709-.1807.1577-.3548.3155-.529.4766-.1676.1575-.3319.3186-.4962.48L31.07,25.2637l-5.3,5.3038-10.23,10.23A20.5427,20.5427,0,0,0,9.4771,55.4268Z" />
            <rect id="logoMark_PathItem_" data-name="logoMark &lt;PathItem&gt;" x="64.4022" y="105.9144" width="0.539" height="4.9292" />
            <path id="logoMark_PathItem_2" data-name="logoMark &lt;PathItem&gt;" d="M12.0436,72.9843,5.8427,66.7836A16.1424,16.1424,0,0,1,1.0154,55.4465,15.6587,15.6587,0,0,1,5.6291,44.28l6.2732-6.27c-.0822.0853-.1643.1709-.24.2594-.115.1184-.2235.2367-.3253.3583a1.1561,1.1561,0,0,0-.1216.1346c-.1183.1316-.23.263-.3418.3978-.1183.138-.2366.2794-.3483.4206-.1545.1874-.3023.3778-.4469.5718-.0822.1017-.161.207-.2366.3121-.046.0624-.092.125-.1348.1872-.0854.1151-.1708.2335-.25.3518a.6079.6079,0,0,0-.0657.0953c-.1052.1479-.2038.2923-.2991.4436-.0985.1412-.19.2892-.2826.4337a1.438,1.438,0,0,0-.092.1512c-.092.1413-.1774.2825-.26.4271-.1018.1677-.2.3354-.2924.5061a.0332.0332,0,0,0-.0132.0231c-.0953.1609-.184.3252-.2727.4929-.01.0164-.0165.0327-.0263.0493-.0756.1445-.1512.2891-.2268.437-.0723.1446-.1445.2926-.2136.44-.0755.1545-.1478.3123-.22.47-.0164.0295-.03.0624-.0427.0919-.0559.125-.1118.2531-.1676.3813-.0658.1478-.1282.2957-.1841.4436-.0624.1478-.1215.2924-.1774.4435-.0657.1643-.1282.3286-.1873.4963-.0953.26-.184.5225-.2695.7886q-.0739.2169-.138.4339c-.0591.1938-.1183.391-.1709.5882-.0657.2333-.1281.47-.184.7065-.0427.161-.0821.3221-.115.483-.0624.263-.1183.5258-.1676.792-.0263.138-.0526.2793-.0756.4173-.0328.1807-.0624.3582-.0887.5388q-.0493.3156-.0887.6311c-.0263.21-.0526.4206-.0723.6341-.01.0921-.02.1874-.0263.2827-.0329.3286-.0559.6638-.0723.9989-.0033.056-.0066.1118-.0066.1676-.0164.3747-.0263.7526-.0263,1.13,0,.3813.01.7591.0263,1.137,0,.0526.0033.1085.0066.1611.0164.3352.0394.667.0723.999.0066.0953.0164.1906.0263.2859.02.2136.046.4238.0723.6341s.0558.4208.0887.6277q.0395.2711.0887.5422c.02.1117.04.2235.0625.3352.02.1183.0427.2365.0657.3516q.1775.8676.414,1.712c.0526.1972.1118.3944.1709.5882q.064.2169.138.4339c.0855.2628.1742.5258.2695.7886.0591.1675.1216.3319.1873.4962.0493.1315.0986.2629.1544.3911.0493.1315.1052.26.1643.3909.0658.1643.1381.3286.21.49.0131.0295.0263.0592.0427.0887.0723.1578.1446.3155.22.47.0691.1478.1413.2924.2136.44.0756.1446.1512.2925.2268.4371.01.0163.0164.0329.0263.0492.0887.1643.1774.332.2727.493a.033.033,0,0,0,.0132.0229c.092.1709.1906.3386.2924.5061.0986.1709.2038.3417.3089.5094q.1578.2563.3253.5027c.0953.1512.1939.2957.2991.4437a.8225.8225,0,0,0,.0657.0953c.0789.1182.1643.2367.25.3515.1479.21.3024.4174.4667.6212.1018.1379.21.2759.322.4107.1216.1545.2465.3089.3779.46.1117.1348.2235.2662.3418.3976a1.4666,1.4666,0,0,0,.1216.1348c.1018.1217.21.24.3253.3582C11.784,72.7182,11.9121,72.8529,12.0436,72.9843Z" />
         </g>
      </svg>
   ),
   UserPlus
}
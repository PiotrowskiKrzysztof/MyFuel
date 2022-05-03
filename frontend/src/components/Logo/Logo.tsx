import React from 'react';
import Svg, { Path } from "react-native-svg"

const XLLogo = () => (
  <Svg
    width="154"
    height="112"
    viewBox="0 0 154 112"
    fill="none">
    <Path
      d="M28.272 47.432L27.744 49.064L19.536 49.784L15.456 47.768V49.64L7.872 50.312L3.072 47.912V11.432L12.48 10.568L17.28 12.968L21.12 27.272L25.536 10.376L34.896 9.608L39.696 12.008V48.536L31.728 49.16L28.272 47.432ZM25.92 10.856L19.824 34.376C19.728 34.76 19.632 35.208 19.536 35.72C19.44 36.2 19.36 36.632 19.296 37.016C19.232 37.4 19.2 37.592 19.2 37.592L19.008 37.64C19.008 37.64 18.976 37.448 18.912 37.064C18.88 36.68 18.816 36.232 18.72 35.72C18.656 35.208 18.576 34.776 18.48 34.424L12.096 11.096L3.552 11.864V47.384L10.176 46.856V31.496C10.176 30.824 10.16 30.12 10.128 29.384C10.096 28.616 10.064 27.976 10.032 27.464C10 26.952 9.984 26.696 9.984 26.696L10.08 26.648C10.144 27.096 10.224 27.656 10.32 28.328C10.448 28.968 10.576 29.592 10.704 30.2C10.864 30.776 10.976 31.224 11.04 31.544L15.072 46.904L22.512 46.232L26.448 31.496C26.64 30.76 26.816 29.992 26.976 29.192C27.136 28.36 27.264 27.656 27.36 27.08C27.456 26.504 27.504 26.216 27.504 26.216L27.6 26.264C27.6 26.264 27.584 26.552 27.552 27.128C27.52 27.704 27.488 28.376 27.456 29.144C27.424 29.912 27.408 30.6 27.408 31.208V46.28L34.416 45.704V10.136L25.92 10.856ZM43.23 51.752C44.638 50.536 45.934 49.272 47.118 47.96C48.302 46.68 49.262 45.496 49.998 44.408L42.03 21.176L50.574 20.408L55.374 22.808L56.862 27.8C57.15 26.52 57.39 25.304 57.582 24.152C57.806 23 58.03 21.72 58.254 20.312L66.174 19.592L70.974 21.992C70.11 27.208 69.006 31.96 67.662 36.248C66.318 40.536 64.574 44.504 62.43 48.152C60.286 51.832 57.598 55.352 54.366 58.712L49.566 56.312L43.23 51.752ZM49.47 55.64C52.606 52.408 55.214 49.016 57.294 45.464C59.374 41.88 61.07 38.008 62.382 33.848C63.694 29.688 64.75 25.128 65.55 20.168L58.638 20.792C58.222 23.704 57.71 26.472 57.102 29.096C56.494 31.688 55.758 34.168 54.894 36.536L50.19 20.936L42.702 21.608L50.526 44.504C49.79 45.624 48.814 46.84 47.598 48.152C46.414 49.496 45.214 50.68 43.998 51.704L49.47 55.64ZM3.072 98.384V61.904L23.328 60.128L28.128 62.528V70.352L16.176 71.36V74.336L21.6 73.856L26.4 76.256V84.08L16.176 84.944V100.016L7.872 100.784L3.072 98.384ZM21.12 81.248V74.384L10.896 75.248V68.528L22.848 67.52V60.656L3.552 62.336V97.904L10.896 97.232V82.112L21.12 81.248ZM56.2706 60.56L61.0706 62.96V87.296C61.0706 91.424 59.9986 94.656 57.8546 96.992C55.7426 99.328 52.8626 100.672 49.2146 101.024C48.9906 101.056 48.7506 101.072 48.4946 101.072C48.2706 101.072 48.0306 101.072 47.7746 101.072C46.2386 101.072 44.7986 100.848 43.4546 100.4C42.1426 99.952 40.7826 99.376 39.3746 98.672C37.8386 97.872 36.5586 96.992 35.5346 96.032C34.5106 95.072 33.7426 93.872 33.2306 92.432C32.7186 90.96 32.4626 89.12 32.4626 86.912V62.192L40.8626 61.424L45.6626 63.824V87.104C45.6626 87.616 45.6786 88.096 45.7106 88.544C45.7746 88.96 45.8386 89.344 45.9026 89.696C46.6386 89.312 47.1986 88.656 47.5826 87.728C47.9666 86.8 48.1586 85.552 48.1586 83.984V61.28L56.2706 60.56ZM48.6386 61.712V83.984C48.6386 86.224 48.2706 87.856 47.5346 88.88C46.7986 89.872 45.7746 90.432 44.4626 90.56H43.9826C42.7986 90.56 41.9026 90.096 41.2946 89.168C40.6866 88.24 40.3826 86.752 40.3826 84.704V61.952L32.9426 62.624V86.912C32.9426 90.592 33.8066 93.392 35.5346 95.312C37.2626 97.232 39.7266 98.192 42.9266 98.192C43.1826 98.192 43.4226 98.192 43.6466 98.192C43.9026 98.192 44.1426 98.176 44.3666 98.144C47.8866 97.856 50.6706 96.576 52.7186 94.304C54.7666 92 55.7906 88.864 55.7906 84.896V61.088L48.6386 61.712ZM67.197 98.384V61.904L87.885 60.08L92.685 62.48V70.352L80.205 71.456V74.336L85.341 73.856L90.141 76.256V84.032L80.205 84.944V89.456L88.701 88.688L93.501 91.088V98.912L71.997 100.784L67.197 98.384ZM74.925 90.416V82.112L84.861 81.2V74.384L74.925 75.296V68.624L87.405 67.52V60.608L67.677 62.336V97.904L88.221 96.08V89.216L74.925 90.416ZM97.6658 98.336V61.856L105.874 61.136L110.674 63.536V89.12L117.394 88.544L122.194 90.944V99.056L102.466 100.736L97.6658 98.336ZM105.394 90.08V61.664L98.1458 62.288V97.856L116.914 96.224V89.072L105.394 90.08Z"
      fill="black"
    />
    <Path
      d="M95.1865 34.0959L89.0827 22.9824L82.9789 34.0384C82.6334 34.6142 82.4031 35.19 82.2303 35.7659C82.0576 36.3993 82 36.9751 82 37.6085C82 39.5087 82.7486 41.2938 84.073 42.6182C85.3974 43.9426 87.1825 44.6912 89.0827 44.6912C90.983 44.6912 92.768 43.9426 94.0924 42.6182C95.4168 41.2938 96.1654 39.5087 96.1654 37.6085C96.1654 36.9751 96.1078 36.3993 95.9351 35.7659C95.7048 35.19 95.4744 34.6142 95.1865 34.0959Z"
      fill="black"
    />
    <Path
      d="M140.389 47.2829C139.526 44.6341 138.316 42.0429 136.877 39.682L136.416 38.991C135.783 37.9545 134.919 37.2059 133.882 36.8028C132.788 36.3421 131.521 36.227 130.312 36.5725L129.333 36.8604C128.412 37.0907 127.606 37.5514 126.972 38.1848C127.779 38.6455 128.7 38.9334 129.679 39.0485L131.521 39.2789C132.731 39.394 133.825 40.1426 134.458 41.2367L138.374 48.0891C139.007 49.1832 139.986 49.9893 141.08 50.3924C141.08 49.8166 140.965 49.2407 140.792 48.6649L140.389 47.2829Z"
      fill="black"
    />
    <Path
      d="M153.921 58.569L152.654 55.5171C152.424 54.9412 151.791 54.6533 151.215 54.8836L150.524 55.1716C149.314 52.4076 147.645 48.4919 146.551 46.4765C144.708 43.1367 140.101 36.054 140.735 34.1537C140.792 33.9234 140.907 33.6355 141.08 33.3476C142.289 30.9867 142.001 28.1075 140.274 26.0921C137.568 22.8675 134.113 18.7791 133.652 18.2608C132.903 17.3971 131.464 15.8423 130.946 15.4968C130.427 15.1513 128.182 15.8423 126.972 16.2454C125.763 16.5909 119.026 18.3184 118.22 18.2608C117.932 18.2608 117.471 18.0881 117.01 17.9153C116.204 17.6274 115.341 18.0305 115.053 18.7791L114.995 18.8942L101.693 13.2511C101.175 13.0208 100.599 12.9632 100.023 13.0208L88.4492 14.4603L89.313 20.8521L99.7931 19.4125L112.289 24.7101L112.001 25.3435C111.77 25.8618 111.77 26.4376 111.943 27.0134L115.283 36.8026C116.089 39.1059 117.298 41.2365 119.026 42.9064C119.544 43.4246 119.947 44.1156 120.177 45.2097C120.696 48.2616 123.287 57.9931 127.26 60.0085C131.233 62.0239 142.117 57.8204 143.153 58.1659C142.865 58.4538 142.75 58.972 142.923 59.3751L144.19 62.427C144.42 63.0028 145.053 63.2908 145.629 63.0604L153.23 59.8934C153.864 59.7782 154.151 59.1448 153.921 58.569ZM138.604 56.1505L138.086 56.4384C137.395 56.7839 136.646 57.0142 135.84 57.1294L133.364 57.4173C130.427 57.7628 127.663 56.208 126.454 53.5016C125.36 50.968 124.611 48.3192 124.381 45.5552L124.093 42.7912C123.748 39.509 125.878 36.5147 129.045 35.6509L130.024 35.363C132.846 34.6144 135.84 35.8237 137.395 38.2997L137.855 38.9907C139.353 41.4668 140.619 44.058 141.483 46.822L141.886 48.0313C142.865 51.2559 141.483 54.6533 138.604 56.1505Z"
      fill="black"
    />
  </Svg>
);

const SMLogo = () => (
  <Svg
    width="93"
    height="56"
    viewBox="0 0 93 56"
    fill="none">
    <Path
      d="M15.5279 23.1582L15.2026 24.1574L10.1449 24.5983L7.63087 23.3639V24.5101L2.9577 24.9215L0 23.4521V1.11677L5.7971 0.587772L8.7548 2.0572L11.121 10.815L13.842 0.470219L19.6096 0L22.5673 1.46943V23.8342L17.6575 24.2162L15.5279 23.1582ZM14.0787 0.764105L10.3224 15.1645C10.2632 15.3996 10.2041 15.6739 10.1449 15.9874C10.0858 16.2813 10.0365 16.5458 9.99703 16.7809C9.9576 17.016 9.93788 17.1336 9.93788 17.1336L9.81957 17.163C9.81957 17.163 9.79985 17.0454 9.76042 16.8103C9.7407 16.5752 9.70126 16.3009 9.64211 15.9874C9.60267 15.6739 9.55338 15.4094 9.49422 15.1939L5.56048 0.911047L0.29577 1.38126V23.1288L4.3774 22.8056V13.4012C4.3774 12.9898 4.36754 12.5587 4.34782 12.1081C4.3281 11.6379 4.30839 11.246 4.28867 10.9326C4.26895 10.6191 4.25909 10.4623 4.25909 10.4623L4.31825 10.433C4.35768 10.7073 4.40698 11.0501 4.46613 11.4616C4.545 11.8534 4.62387 12.2355 4.70275 12.6077C4.80134 12.9604 4.87035 13.2347 4.90979 13.4306L7.39426 22.835L11.9787 22.4235L14.404 13.4012C14.5223 12.9506 14.6308 12.4804 14.7294 11.9906C14.8279 11.4812 14.9068 11.0501 14.966 10.6975C15.0251 10.3448 15.0547 10.1685 15.0547 10.1685L15.1139 10.1978C15.1139 10.1978 15.104 10.3742 15.0843 10.7268C15.0646 11.0795 15.0448 11.4909 15.0251 11.9612C15.0054 12.4314 14.9956 12.8526 14.9956 13.2249V22.4529L19.3138 22.1002V0.323276L14.0787 0.764105Z"
      fill="black"
    />
    <Path
      d="M24.7449 25.8032C25.6125 25.0587 26.411 24.2848 27.1406 23.4815C27.8702 22.6978 28.4617 21.9729 28.9152 21.3067L24.0054 7.08265L29.2702 6.61244L32.2279 8.08187L33.1447 11.1383C33.3222 10.3546 33.4701 9.61008 33.5884 8.90475C33.7264 8.19942 33.8645 7.41573 34.0025 6.55366L38.8827 6.11283L41.8404 7.58226C41.308 10.7758 40.6277 13.6853 39.7996 16.3107C38.9714 18.9361 37.8968 21.3655 36.5757 23.5991C35.2546 25.8522 33.5983 28.0073 31.6067 30.0646L28.649 28.5951L24.7449 25.8032ZM28.5899 28.1837C30.5223 26.2048 32.1293 24.1281 33.4109 21.9533C34.6926 19.7589 35.7377 17.3883 36.5461 14.8412C37.3545 12.2942 38.0052 9.50232 38.4982 6.4655L34.2391 6.84755C33.9828 8.63046 33.6673 10.3252 33.2926 11.9318C32.918 13.5188 32.4645 15.0372 31.9321 16.487L29.0335 6.93571L24.4195 7.34715L29.2406 21.3655C28.7871 22.0513 28.1857 22.7958 27.4364 23.5991C26.7068 24.4219 25.9674 25.1469 25.2181 25.7738L28.5899 28.1837Z"
      fill="black"
    />
    <Path
      d="M0 54.3542V32.0189L12.4815 30.9315L15.4392 32.4009V37.1913L8.07453 37.8084V39.6305L11.4167 39.3367L14.3744 40.8061V45.5964L8.07453 46.1254V55.3535L2.9577 55.8237L0 54.3542ZM11.121 43.8625V39.6599L4.82105 40.1889V36.0745L12.1857 35.4574V31.2548L0.29577 32.2834V54.0604L4.82105 53.6489V44.3915L11.121 43.8625Z"
      fill="black"
    />
    <Path
      d="M32.7803 31.196L35.7381 32.6654V47.5655C35.7381 50.0929 35.0775 52.0717 33.7564 53.502C32.455 54.9322 30.6804 55.7551 28.4325 55.9706C28.2945 55.9902 28.1466 56 27.9889 56C27.8508 56 27.703 56 27.5452 56C26.5988 56 25.7114 55.8629 24.8833 55.5886C24.0748 55.3143 23.2368 54.9616 22.3692 54.5306C21.4228 54.0408 20.6341 53.502 20.0031 52.9142C19.3721 52.3264 18.8989 51.5917 18.5834 50.7101C18.2679 49.8088 18.1101 48.6822 18.1101 47.3304V32.1952L23.2861 31.725L26.2438 33.1944V47.4479C26.2438 47.7614 26.2537 48.0553 26.2734 48.3296C26.3128 48.5843 26.3523 48.8194 26.3917 49.0349C26.8452 48.7998 27.1903 48.3981 27.4269 47.83C27.6635 47.2618 27.7818 46.4977 27.7818 45.5377V31.6368L32.7803 31.196ZM28.0776 31.9013V45.5377C28.0776 46.9091 27.8508 47.9083 27.3973 48.5353C26.9438 49.1427 26.3128 49.4855 25.5044 49.5639H25.2086C24.4791 49.5639 23.927 49.2798 23.5523 48.7116C23.1777 48.1434 22.9904 47.2324 22.9904 45.9785V32.0483L18.4059 32.4597V47.3304C18.4059 49.5835 18.9383 51.2978 20.0031 52.4734C21.0679 53.6489 22.5861 54.2367 24.5579 54.2367C24.7157 54.2367 24.8636 54.2367 25.0016 54.2367C25.1593 54.2367 25.3072 54.2269 25.4452 54.2073C27.6142 54.031 29.3297 53.2473 30.5917 51.8562C31.8536 50.4455 32.4846 48.5255 32.4846 46.096V31.5193L28.0776 31.9013Z"
      fill="black"
    />
    <Path
      d="M39.5131 54.3542V32.0189L52.2607 30.9021L55.2184 32.3716V37.1913L47.5284 37.8672V39.6305L50.6932 39.3367L53.6509 40.8061V45.567L47.5284 46.1254V48.888L52.7636 48.4177L55.7213 49.8872V54.6775L42.4708 55.8237L39.5131 54.3542ZM44.2749 49.4757V44.3915L50.3974 43.8331V39.6599L44.2749 40.2183V36.1333L51.965 35.4574V31.2254L39.8088 32.2834V54.0604L52.4678 52.9436V48.741L44.2749 49.4757Z"
      fill="black"
    />
    <Path
      d="M58.2875 54.3248V31.9895L63.3452 31.5487L66.3029 33.0181V48.6822L70.4437 48.3296L73.4014 49.799V54.7657L61.2452 55.7943L58.2875 54.3248ZM63.0494 49.27V31.8719L58.5833 32.254V54.031L70.1479 53.0317V48.6528L63.0494 49.27Z"
      fill="black"
    />
    <Path
      d="M56.7599 14.9931L52.9988 8.18875L49.2377 14.9579C49.0248 15.3104 48.8829 15.663 48.7764 16.0156C48.67 16.4034 48.6345 16.7559 48.6345 17.1438C48.6345 18.3072 49.0957 19.4001 49.9118 20.211C50.7279 21.0219 51.8279 21.4802 52.9988 21.4802C54.1697 21.4802 55.2696 21.0219 56.0857 20.211C56.9018 19.4001 57.363 18.3072 57.363 17.1438C57.363 16.7559 57.3276 16.4034 57.2211 16.0156C57.0792 15.663 56.9373 15.3104 56.7599 14.9931Z"
      fill="black"
    />
    <Path
      d="M84.6132 23.0669C84.081 21.4451 83.3359 19.8586 82.4488 18.4131L82.165 17.99C81.7747 17.3554 81.2425 16.8971 80.6038 16.6503C79.9296 16.3682 79.149 16.2977 78.4039 16.5093L77.8007 16.6855C77.233 16.8266 76.7362 17.1086 76.3459 17.4964C76.8427 17.7785 77.4104 17.9548 78.0136 18.0253L79.149 18.1663C79.8941 18.2368 80.5683 18.6951 80.9586 19.365L83.3714 23.5605C83.7617 24.2303 84.3649 24.7239 85.039 24.9707C85.039 24.6181 84.9681 24.2656 84.8616 23.913L84.6132 23.0669Z"
      fill="black"
    />
    <Path
      d="M92.9514 29.977L92.1709 28.1084C92.0289 27.7558 91.6386 27.5796 91.2838 27.7206L90.858 27.8969C90.1129 26.2046 89.0839 23.8072 88.4098 22.5732C87.2743 20.5284 84.4358 16.1919 84.8261 15.0284C84.8616 14.8874 84.9325 14.7111 85.039 14.5349C85.7841 13.0894 85.6067 11.3266 84.5422 10.0926C82.8746 8.11828 80.7457 5.61511 80.4618 5.2978C80.0005 4.76896 79.1135 3.81705 78.7941 3.60552C78.4748 3.39398 77.091 3.81705 76.3459 4.06385C75.6008 4.27538 71.4494 5.33306 70.9526 5.2978C70.7752 5.2978 70.4914 5.19204 70.2075 5.08627C69.7108 4.90999 69.1785 5.15678 69.0011 5.61511L68.9656 5.68562L60.7693 2.23054C60.45 2.08951 60.0951 2.05426 59.7403 2.08951L52.6084 2.97091L53.1407 6.88432L59.5984 6.00292L67.298 9.24647L67.1206 9.63429C66.9786 9.95159 66.9786 10.3041 67.0851 10.6567L69.1431 16.6502C69.6398 18.0605 70.3849 19.3649 71.4494 20.3873C71.7687 20.7047 72.0171 21.1277 72.159 21.7976C72.4784 23.6662 74.075 29.6244 76.5233 30.8584C78.9716 32.0923 85.6776 29.5186 86.3163 29.7302C86.1389 29.9065 86.0679 30.2238 86.1744 30.4706L86.955 32.3391C87.0969 32.6917 87.4872 32.868 87.842 32.7269L92.5257 30.7879C92.916 30.7173 93.0934 30.3295 92.9514 29.977ZM83.5132 28.4962L83.1939 28.6725C82.7681 28.884 82.3069 29.0251 81.8101 29.0956L80.2844 29.2719C78.4748 29.4834 76.7717 28.5315 76.0266 26.8744C75.3524 25.3232 74.8911 23.7014 74.7492 22.0091L74.5718 20.3168C74.3589 18.3072 75.6717 16.4739 77.6232 15.9451L78.2264 15.7688C79.965 15.3105 81.8101 16.0509 82.7681 17.5669L83.052 17.9899C83.9745 19.506 84.7551 21.0925 85.2873 22.7848L85.5357 23.5251C86.1389 25.4995 85.2873 27.5796 83.5132 28.4962Z"
      fill="black"
    />
  </Svg>
);

type SizeVariant = 'sm' | 'xl';

const iconVariant = (variant: SizeVariant) => {
  switch (variant) {
    case 'xl': {
      return XLLogo;
    }
    case 'sm':
    default: {
      return SMLogo;
    }
  }
};

type Props = { variant: SizeVariant };

const Logo = ({ variant = 'sm' }: Props) => iconVariant(variant)();

export default Logo;
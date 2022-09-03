import { Icon } from '@chakra-ui/react'

type TVisaIconProps = {
  h?: number
  w?: number
}

const VisaIcon: React.FC<TVisaIconProps> = ({ h, w }) => {
  const height = h || 11
  const width = w || 35

  return (
    <Icon width={width} height={height} viewBox="0 0 35 11">
      <path d="M24.9128 1.1598C24.1356 0.89258 23.3149 0.757839 22.4885 0.761772C19.82 0.761772 17.9342 2.04421 17.9227 3.87951C17.9008 5.22845 19.2595 5.98878 20.2865 6.44339C21.3416 6.90892 21.6943 7.19876 21.6891 7.61168C21.6839 8.24793 20.8458 8.53181 20.0746 8.53181C19.0028 8.53181 18.4215 8.39285 17.5251 8.03551L17.1921 7.88563L16.8123 10.0058C17.4645 10.2589 18.6334 10.4813 19.8398 10.5021C22.6826 10.5021 24.5361 9.2306 24.5569 7.27022C24.5789 6.19524 23.8515 5.37933 22.3017 4.70635C21.3666 4.27258 20.7811 3.97679 20.7811 3.53211C20.7811 3.13904 21.281 2.72612 22.3246 2.72612C23.0172 2.70962 23.7058 2.83099 24.3461 3.08246L24.6018 3.19065L24.9765 1.14888L24.9128 1.1598ZM31.8497 0.937461H29.7625C29.1102 0.937461 28.626 1.10322 28.338 1.71863L24.3263 10.3671H27.1639L27.7358 8.95069L31.1975 8.95565C31.2841 9.28618 31.5283 10.3661 31.5283 10.3661H34.034L31.8497 0.937461ZM14.0801 0.860039H16.782L15.0913 10.2937H12.3894L14.0801 0.855076V0.860039ZM7.20995 6.05529L7.4865 7.36849L10.1331 0.937461H12.9978L8.73571 10.3512H5.88351L3.54581 2.3797C3.5279 2.31349 3.49599 2.25143 3.45203 2.19734C3.40807 2.14324 3.35298 2.09823 3.29012 2.06505C2.45041 1.64966 1.55963 1.33524 0.63829 1.12903L0.670643 0.931506H5.02983C5.61739 0.952351 6.09536 1.12903 6.25817 1.72856L7.20995 6.06025V6.05529ZM28.506 7.02207L29.5882 4.38078C29.5715 4.40559 29.8105 3.83783 29.9462 3.48049L30.1309 4.29144L30.7571 7.01612H28.506V7.02207Z" fill="white" />
    </Icon>
  )
}

export default VisaIcon
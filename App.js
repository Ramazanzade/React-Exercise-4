import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList } from 'react-native';

export default function App() {









// muəllim staylını özum eləmədim, bilirəm ki ona önəm verməsiz . Belə 100-luk kod yazmışamaa ahahah










  const data = [
    {
      "createdAt": "2022-12-20T04:12:14.621Z",
      "firstName": "Aliza",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/463.jpg",
      "lastName": "Keebler",
      "number": "(991) 252-6870 x77226",
      "id": "1"
    },
    {
      "createdAt": "2022-12-19T08:56:11.996Z",
      "firstName": "Zena",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/568.jpg",
      "lastName": "Friesen",
      "number": "1-650-734-6992 x8562",
      "id": "2"
    },
    {
      "createdAt": "2022-12-19T06:48:37.782Z",
      "firstName": "Jade",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1201.jpg",
      "lastName": "Shields",
      "number": "1-210-200-6677",
      "id": "3"
    },
    {
      "createdAt": "2022-12-19T09:53:45.655Z",
      "firstName": "Alexis",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/940.jpg",
      "lastName": "Bartell",
      "number": "934-386-4734",
      "id": "4"
    },
    {
      "createdAt": "2022-12-19T15:33:00.336Z",
      "firstName": "Rosalee",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1226.jpg",
      "lastName": "Collier",
      "number": "(763) 942-3078 x4260",
      "id": "5"
    },
    {
      "createdAt": "2022-12-19T17:04:46.476Z",
      "firstName": "Morton",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/996.jpg",
      "lastName": "Gusikowski",
      "number": "202.809.3622 x5622",
      "id": "6"
    },
    {
      "createdAt": "2022-12-19T23:39:10.910Z",
      "firstName": "Maxime",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/798.jpg",
      "lastName": "Langosh",
      "number": "992.531.4637 x01129",
      "id": "7"
    },
    {
      "createdAt": "2022-12-19T17:45:10.616Z",
      "firstName": "Hailie",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/360.jpg",
      "lastName": "Labadie",
      "number": "(573) 457-9616",
      "id": "8"
    },
    {
      "createdAt": "2022-12-19T05:34:32.969Z",
      "firstName": "Piper",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/626.jpg",
      "lastName": "Lockman",
      "number": "861.259.4266",
      "id": "9"
    },
    {
      "createdAt": "2022-12-19T10:26:55.365Z",
      "firstName": "Alexys",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1093.jpg",
      "lastName": "Carroll",
      "number": "250.905.9153 x5339",
      "id": "10"
    },
    {
      "createdAt": "2022-12-20T04:00:45.036Z",
      "firstName": "Halle",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/952.jpg",
      "lastName": "Steuber",
      "number": "1-210-575-3007 x0450",
      "id": "11"
    },
    {
      "createdAt": "2022-12-19T06:27:17.503Z",
      "firstName": "Destany",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/85.jpg",
      "lastName": "Rau",
      "number": "1-288-811-0545",
      "id": "12"
    },
    {
      "createdAt": "2022-12-19T11:06:27.369Z",
      "firstName": "Nelle",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/953.jpg",
      "lastName": "Prohaska",
      "number": "779-912-2692 x6464",
      "id": "13"
    },
    {
      "createdAt": "2022-12-20T00:40:47.517Z",
      "firstName": "Lauriane",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/348.jpg",
      "lastName": "Block",
      "number": "1-561-460-0680 x45809",
      "id": "14"
    },
    {
      "createdAt": "2022-12-19T10:05:40.527Z",
      "firstName": "Osvaldo",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/920.jpg",
      "lastName": "Schulist",
      "number": "(997) 578-8143 x40959",
      "id": "15"
    },
    {
      "createdAt": "2022-12-20T00:52:32.560Z",
      "firstName": "Candelario",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/994.jpg",
      "lastName": "Effertz",
      "number": "1-494-453-7997 x092",
      "id": "16"
    },
    {
      "createdAt": "2022-12-19T16:49:49.316Z",
      "firstName": "Ellis",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/189.jpg",
      "lastName": "Spencer",
      "number": "(457) 626-7429",
      "id": "17"
    },
    {
      "createdAt": "2022-12-19T11:44:10.659Z",
      "firstName": "Adell",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/609.jpg",
      "lastName": "Bogisich",
      "number": "282.815.3545",
      "id": "18"
    },
    {
      "createdAt": "2022-12-19T04:41:53.135Z",
      "firstName": "Amelia",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/397.jpg",
      "lastName": "Oberbrunner",
      "number": "901-467-8782 x690",
      "id": "19"
    },
    {
      "createdAt": "2022-12-19T06:49:35.742Z",
      "firstName": "Alanna",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/331.jpg",
      "lastName": "Stokes",
      "number": "1-547-350-4311 x51621",
      "id": "20"
    },
    {
      "createdAt": "2022-12-20T03:48:38.356Z",
      "firstName": "Kathryne",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/308.jpg",
      "lastName": "Conn",
      "number": "(365) 892-3304",
      "id": "21"
    },
    {
      "createdAt": "2022-12-19T11:47:12.959Z",
      "firstName": "Jessy",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/485.jpg",
      "lastName": "Gottlieb",
      "number": "815.972.8459",
      "id": "22"
    },
    {
      "createdAt": "2022-12-19T05:30:19.641Z",
      "firstName": "Joseph",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/567.jpg",
      "lastName": "Mitchell",
      "number": "592-492-9954 x02991",
      "id": "23"
    },
    {
      "createdAt": "2022-12-19T06:41:48.726Z",
      "firstName": "Adrien",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1058.jpg",
      "lastName": "Graham",
      "number": "(730) 300-7142 x21218",
      "id": "24"
    },
    {
      "createdAt": "2022-12-19T19:38:27.043Z",
      "firstName": "Ramon",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/188.jpg",
      "lastName": "Konopelski",
      "number": "489.548.0381 x902",
      "id": "25"
    },
    {
      "createdAt": "2022-12-19T10:19:17.920Z",
      "firstName": "Cicero",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/803.jpg",
      "lastName": "Gulgowski",
      "number": "(767) 295-0183 x55788",
      "id": "26"
    },
    {
      "createdAt": "2022-12-19T15:16:35.395Z",
      "firstName": "Donnie",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/214.jpg",
      "lastName": "Schoen",
      "number": "(829) 379-8067 x063",
      "id": "27"
    },
    {
      "createdAt": "2022-12-19T13:35:00.826Z",
      "firstName": "Lon",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/523.jpg",
      "lastName": "Lindgren",
      "number": "439.742.5349 x71912",
      "id": "28"
    },
    {
      "createdAt": "2022-12-19T17:32:11.271Z",
      "firstName": "Nona",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/458.jpg",
      "lastName": "Kunde",
      "number": "(854) 294-9251 x789",
      "id": "29"
    },
    {
      "createdAt": "2022-12-19T23:23:31.896Z",
      "firstName": "Jakob",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/402.jpg",
      "lastName": "Zboncak",
      "number": "1-946-787-1522",
      "id": "30"
    },
    {
      "createdAt": "2022-12-19T09:37:44.401Z",
      "firstName": "Adolfo",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/848.jpg",
      "lastName": "Bauch",
      "number": "(749) 205-4453 x8604",
      "id": "31"
    },
    {
      "createdAt": "2022-12-19T15:04:42.538Z",
      "firstName": "Darius",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/38.jpg",
      "lastName": "Parisian",
      "number": "1-932-768-0424 x8613",
      "id": "32"
    },
    {
      "createdAt": "2022-12-19T18:54:04.748Z",
      "firstName": "Luther",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/392.jpg",
      "lastName": "Kiehn",
      "number": "(462) 573-8807 x3014",
      "id": "33"
    },
    {
      "createdAt": "2022-12-19T22:49:49.436Z",
      "firstName": "Kara",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/828.jpg",
      "lastName": "Ferry",
      "number": "705-290-5025 x47103",
      "id": "34"
    },
    {
      "createdAt": "2022-12-19T14:34:17.108Z",
      "firstName": "Kiel",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/85.jpg",
      "lastName": "Hilll",
      "number": "1-681-987-6283",
      "id": "35"
    },
    {
      "createdAt": "2022-12-19T16:26:48.286Z",
      "firstName": "Vanessa",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/302.jpg",
      "lastName": "Rowe",
      "number": "828-486-9292 x538",
      "id": "36"
    },
    {
      "createdAt": "2022-12-19T21:44:20.879Z",
      "firstName": "Lavon",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/202.jpg",
      "lastName": "Marks",
      "number": "1-356-415-5947 x4125",
      "id": "37"
    },
    {
      "createdAt": "2022-12-19T10:20:38.594Z",
      "firstName": "Laverna",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/196.jpg",
      "lastName": "Abshire",
      "number": "(652) 418-2687 x605",
      "id": "38"
    },
    {
      "createdAt": "2022-12-19T17:21:28.841Z",
      "firstName": "Marcelina",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/403.jpg",
      "lastName": "Kuhic",
      "number": "619-346-0672 x055",
      "id": "39"
    },
    {
      "createdAt": "2022-12-19T22:49:34.212Z",
      "firstName": "Eriberto",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1087.jpg",
      "lastName": "Keeling",
      "number": "1-618-396-1216 x78431",
      "id": "40"
    },
    {
      "createdAt": "2022-12-19T19:11:30.882Z",
      "firstName": "Friedrich",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1140.jpg",
      "lastName": "Crooks",
      "number": "(210) 639-1105 x40669",
      "id": "41"
    },
    {
      "createdAt": "2022-12-19T21:19:22.860Z",
      "firstName": "Tate",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/330.jpg",
      "lastName": "Rice",
      "number": "302.226.8241 x91633",
      "id": "42"
    },
    {
      "createdAt": "2022-12-20T02:07:57.023Z",
      "firstName": "Charles",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1089.jpg",
      "lastName": "Stokes",
      "number": "854-291-3355",
      "id": "43"
    },
    {
      "createdAt": "2022-12-19T19:20:31.960Z",
      "firstName": "Jevon",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/64.jpg",
      "lastName": "Kunze",
      "number": "1-593-633-4444 x86390",
      "id": "44"
    },
    {
      "createdAt": "2022-12-19T19:29:56.488Z",
      "firstName": "Lesley",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/120.jpg",
      "lastName": "Moen",
      "number": "1-958-905-6021 x9021",
      "id": "45"
    },
    {
      "createdAt": "2022-12-19T16:17:56.985Z",
      "firstName": "Ethelyn",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/42.jpg",
      "lastName": "Sipes",
      "number": "(298) 379-2310 x73256",
      "id": "46"
    },
    {
      "createdAt": "2022-12-19T11:09:41.260Z",
      "firstName": "Nella",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/694.jpg",
      "lastName": "Nitzsche",
      "number": "(929) 656-2912 x8834",
      "id": "47"
    },
    {
      "createdAt": "2022-12-20T01:35:32.511Z",
      "firstName": "Durward",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1104.jpg",
      "lastName": "Cronin",
      "number": "(716) 506-5058 x270",
      "id": "48"
    },
    {
      "createdAt": "2022-12-19T19:54:40.645Z",
      "firstName": "Donald",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1158.jpg",
      "lastName": "Franey",
      "number": "377-766-6584 x2208",
      "id": "49"
    },
    {
      "createdAt": "2022-12-19T10:39:08.415Z",
      "firstName": "Lewis",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/852.jpg",
      "lastName": "Fay",
      "number": "749-744-8403 x3619",
      "id": "50"
    },
    {
      "createdAt": "2022-12-19T19:25:47.488Z",
      "firstName": "Pansy",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/236.jpg",
      "lastName": "Jerde",
      "number": "583-804-5213 x808",
      "id": "51"
    },
    {
      "createdAt": "2022-12-19T18:22:49.049Z",
      "firstName": "Stanford",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/989.jpg",
      "lastName": "Wehner",
      "number": "736.508.0976 x123",
      "id": "52"
    }
  ]


  let products = [];

  data.forEach(item => {

    let send = products.find(q => q.title.charAt(0) ==item.firstName.charAt(0))


    if (send) {

      send.data.push(item.firstName)

    } else {

      let add = {

     
          title: item.firstName.charAt(0),
        data: [item.firstName + "    " + item.lastName]
      }


        products.push(add)
      
     

    }
  })

  return (
    <View >
      <SectionList
        sections={products}
        renderItem={product}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={{fontSize:30 , fontWeight:'600', backgroundColor:'#c7e5e8'}}>{title}</Text>
        )}
      />
    </View>
  );


}

const product = ({item}) => {
  return <Text style={{fontSize:30}}>{item}</Text>

}























const styles = StyleSheet.create({

});

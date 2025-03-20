


export const config = {
  
    HostConfig: [
      {
        hostPath: "localhost:4200",
        fileBaseURL: "D:\\LG Project\\CSR\\API\\CSR\\LG.CSR.Core.Api\\Files\\",
        apiUrl: "https://localhost:44321/",
        vd:'',
        menuPosition:'side'
  
      },
  
      {
        hostPath: "localhost:4201/",
        fileBaseURL: "http://103.35.121.104/onboard/on-boarding-documents/",
        apiUrl: "http://103.35.121.104/onboard/",
        vd:'',
        menuPosition:'side'
      },
  
     
      {
        hostPath: "103.35.121.104:8081/vts/",
        fileBaseURL: "http://103.35.121.104/vts/documents/",
        apiUrl: "http://103.35.121.104:8081/vts/api/",
        vd:'/vts',
        menuPosition:'side'
      },
      {      
        hostPath: "10.101.0.136:8088/vts/",
        fileBaseURL: "http://10.101.0.136:8088/vts/documents/",
        apiUrl: "http://10.101.0.136:8088/vts/api/",
        vd:'/vts',
        menuPosition:'side'
      },
      {      
        hostPath: "nextlg4all.com/onboarding/",
        fileBaseURL: "https://nextlg4all.com/LGONBOARD_API/documents/",
        apiUrl: "https://nextlg4all.com/LGONBOARD_API/",
        vd:'/onboarding',
        menuPosition:'side'
      }
    ]
  }
<template>
    <div>
      <input type="file" ref="file" name="file" @change="handleFileUpload($event)" />

    </div>
  </template>
  
  <script>
import * as XLSX from 'xlsx';

export default ({
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();

      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet);

        // Do something with the JSON data
        console.log(jsonData);
      };

      reader.readAsArrayBuffer(file);
    }
  }
});
   </script>
  
  <style scoped>
  .table-container {
    max-height: 50px; /* Set max-height as needed */
    overflow-y: auto;
  }
  
  .custom-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .custom-table th, .custom-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  </style>
  
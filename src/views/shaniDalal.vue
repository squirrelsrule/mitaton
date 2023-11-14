<template>
    <div>
      <div class="table-container">
        <table class="custom-table">
          <thead>
            <tr>
              <th>Column 1</th>
              <th>Column 2</th>
              <!-- Add more columns as needed -->
            </tr>
          </thead>
          <tbody>
            <!-- Your table rows go here -->
            <tr v-for="(item, index) in items" :key="index">
              <td>{{ item.column1 }}</td>
              <td>{{ item.column2 }}</td>
              <!-- Add more cells as needed -->
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // Your data goes here, e.g., items for table rows
        items: [
          { column1: 'Data 1', column2: 'Data 2' },
          // Add more items as needed
        ],
      };
    },
  };
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
  
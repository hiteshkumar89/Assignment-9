// init.js
async function loadData() {
    try {
        const response = await fetch('data/employees.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error loading data:', error);
        throw error;
    }
}

export { loadData };
# Use an official node image as a base
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files into the container
COPY . .

# Build the Vite app
# RUN npm run build

# Expose port 5173 for the Vite server
EXPOSE 5173

# Command to start the Vite development server
CMD ["npm", "run", "dev", "--", "--host"]


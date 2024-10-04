# # Use an official node image as a base
# FROM node:18-alpine

# # Set the working directory in the container
# WORKDIR /app

# # Copy the package.json and package-lock.json into the container
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the project files into the container
# COPY . .

# # Build the Vite app
# RUN npm run build

# # Expose port 5173 for the Vite server
# EXPOSE 5173

# # Command to start the Vite development server
# CMD ["npm", "run", "dev", "--", "--host"]


# Stage 1: Build the Vite app
FROM node:18-alpine AS builder

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json into the container
COPY package*.json ./

# Install dependencies (only production dependencies)
RUN npm install 

# Copy the rest of the project files into the container
COPY . .

# Build the Vite app
RUN npm run build

# Stage 2: Serve the app with a lightweight server
FROM nginx:alpine

# Set working directory to Nginx web root
WORKDIR /usr/share/nginx/html

# Copy built assets from the previous stage
COPY --from=builder /app/dist .

# Expose port 80 for Nginx
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]


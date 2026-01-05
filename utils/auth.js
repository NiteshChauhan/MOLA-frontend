// This file simulates using a library like bcrypt for password management.
// You would need to install 'bcrypt' in a real project.
import bcrypt from "bcryptjs";


// Define the salt rounds for hashing
const saltRounds = 10;

/**
 * Hashes a plain text password.
 * @param {string} password - The plain text password.
 * @returns {Promise<string>} The hashed password string.
 */
export async function hashPassword(password) {
  // In a real application, replace this stub with actual bcrypt.hash implementation
  try {
    return await bcrypt.hash(password, saltRounds);
  } catch (error) {
    console.error("Error hashing password:", error);
    throw new Error("Password hashing failed.");
  }
}

/**
 * Compares a plain text password with a hashed password.
 * @param {string} password - The plain text password.
 * @param {string} hash - The hashed password from the database.
 * @returns {Promise<boolean>} True if the passwords match, false otherwise.
 */
export async function comparePassword(password, hash) {
  // In a real application, replace this stub with actual bcrypt.compare implementation
  try {
    return await bcrypt.compare(password, hash);
  } catch (error) {
    console.error("Error comparing password:", error);
    return false;
  }
}
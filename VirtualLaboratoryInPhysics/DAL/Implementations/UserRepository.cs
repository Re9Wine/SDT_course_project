﻿using DAL.Interfaces;
using Domain.Entity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DAL.Implementations
{
    public class UserRepository : IUserRepository
    {
        private readonly ApplicationDbContext _context;

        public UserRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public Task<bool> Create(User entity)
        {
            if (entity == null)
            {
                return Task.FromResult(false);
            }

            _context.Users.Add(entity);

            return Task.FromResult(_context.SaveChangesAsync().Result != 0);
        }

        public Task<bool> Delete(User entity)
        {
            if (entity == null)
            {
                return Task.FromResult(false);
            }

            _context.Users.Remove(entity);

            return Task.FromResult(_context.SaveChangesAsync().Result != 0);
        }

        public Task<List<User>> GetAll()
        {
            return _context.Users.ToListAsync();
        }

        public Task<User> GetById(Guid id)
        {
            return _context.Users.FirstOrDefaultAsync(x => x.Id == id);
        }

        public Task<User> GetByLogin(string login)
        {
            return _context.Users.FirstOrDefaultAsync(x => x.Login == login);
        }

        public Task<bool> Update(User entity)
        {
            if (entity == null)
            {
                return Task.FromResult(false);
            }

            _context.Users.Update(entity);

            return Task.FromResult(_context.SaveChangesAsync().Result != 0);
        }
    }
}

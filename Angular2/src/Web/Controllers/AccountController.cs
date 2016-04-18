﻿
using Domain.Interfaces.Repositories;
using Domain.Models;
using Domain.Models.Auth;
using Microsoft.AspNet.Authorization;
using Microsoft.AspNet.Mvc;

namespace Web.Controllers
{
    [Route("api/Account")]
    public class AccountController : Controller
    {
        private readonly IUserRepository _userRepository;

        public AccountController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        // POST api/Account/Register
        [AllowAnonymous]
        [HttpPost]
        [Route("Register")]
        public ActionResult Register([FromBody]UserModel userModel)
        {
             if (!ModelState.IsValid)
             {
                return HttpBadRequest(ModelState);
             }

             var result = _userRepository.RegisterUser(userModel);
             if (result == null)
             {
                 return HttpBadRequest();
             }

             return Ok();
        }

        [HttpPost]
        [Route("list")]
        public ActionResult List([FromBody]ListRequest request)
        {
            return Ok(_userRepository.List(request));
        }

        [HttpDelete]
        [Route("{userName}")]
        public ActionResult Delete(string userName)
        {
            _userRepository.Delete(userName);
            return Ok(true);
        }
    }
}

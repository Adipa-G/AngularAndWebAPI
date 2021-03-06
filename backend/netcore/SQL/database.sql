/****** Object:  Table [dbo].[ConfigSetting]    Script Date: 14/10/2018 10:36:53 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ConfigSetting](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[ConfigKey] [nvarchar](256) NOT NULL,
	[ConfigValue] [nvarchar](512) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LogHttpRecord]    Script Date: 14/10/2018 10:36:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LogHttpRecord](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Level] [nvarchar](255) NOT NULL,
	[TrackingId] [nvarchar](255) NULL,
	[CalledOn] [datetime2](7) NOT NULL,
	[CallerAddress] [nvarchar](255) NOT NULL,
	[RequestIdentity] [nvarchar](256) NOT NULL,
	[Verb] [nvarchar](50) NOT NULL,
	[RequestUri] [nvarchar](1024) NOT NULL,
	[RequestHeaders] [ntext] NOT NULL,
	[Request] [ntext] NOT NULL,
	[StatusCode] [int] NULL,
	[ReasonPhrase] [nvarchar](255) NULL,
	[ResponseHeaders] [ntext] NULL,
	[Response] [ntext] NULL,
	[CallDuration] [bigint] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LogMessageRecord]    Script Date: 14/10/2018 10:36:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LogMessageRecord](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[LogTimestamp] [datetime2](7) NOT NULL,
	[Level] [nvarchar](255) NOT NULL,
	[Logger] [nvarchar](256) NOT NULL,
	[Message] [ntext] NOT NULL,
	[StackTrace] [ntext] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 14/10/2018 10:36:54 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[UserId] [bigint] IDENTITY(1,1) NOT NULL,
	[UserName] [nvarchar](256) NOT NULL,
	[Password] [nvarchar](512) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
